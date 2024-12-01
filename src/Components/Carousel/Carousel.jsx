import React, { useState, useEffect, useRef, useCallback } from 'react';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Track the active slide
  const autoplayTimer = useRef(null); // Ref to store autoplay timer
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);

  const slides = [
    { id: 1, img: '/src/assets/img/reduced_images/nature-img.png', subtitle: 'Gylan Salih', description: 'Explore my journey through code and creativity. Here, I showcase my projects, each project made with passion, dedication & Love.' },
    { id: 2, img: '/src/assets/img/reduced_images/redsword-img.png', subtitle: 'Gylan Salih', description: 'Explore my journey through code and creativity. Here, I showcase my projects, each project made with passion, dedication & Love.' },
    { id: 3, img: '/src/assets/img/reduced_images/5.jpeg', subtitle: 'Gylan Salih', description: 'Explore my journey through code and creativity. Here, I showcase my projects, each project made with passion, dedication & Love.' },
    { id: 4, img: '/src/assets/img/reduced_images/7.jpg', subtitle: 'Gylan Salih', description: 'Explore my journey through code and creativity. Here, I showcase my projects, each project made with passion, dedication & Love.' },
    { id: 5, img: '/src/assets/img/reduced_images/6.jpg', subtitle: 'Gylan Salih', description: 'Explore my journey through code and creativity. Here, I showcase my projects, each project made with passion, dedication & Love.' },
  ];

  const autoplayInterval = 5000; // Interval in milliseconds

  // Start autoplay using setInterval
  const startAutoplay = () => {
    autoplayTimer.current = setInterval(() => {
      setActiveSlide(prev => (prev === slides.length ? 1 : prev + 1));
    }, autoplayInterval);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayTimer.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // Cleanup interval on unmount
  }, []);

  const handleSwipeStart = (e) => {
    if (e.type === 'touchstart') {
      setStartX(e.touches[0].pageX);
      setStartY(e.touches[0].pageY);
    } else {
      setStartX(e.pageX);
      setStartY(e.pageY);
    }
    stopAutoplay(); // Stop autoplay while swiping
  };

  const handleSwipeEnd = (e) => {
    if (e.type === 'touchend') {
      setEndX(e.changedTouches[0].pageX);
      setEndY(e.changedTouches[0].pageY);
    } else {
      setEndX(e.pageX);
      setEndY(e.pageY);
    }

    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) {
        // Swipe right
        setActiveSlide((prev) => (prev === 1 ? slides.length : prev - 1));
      } else if (diffX < -50) {
        // Swipe left
        setActiveSlide((prev) => (prev === slides.length ? 1 : prev + 1));
      }
    }

    startAutoplay(); // Restart autoplay after swipe
  };

  return (
    <div
      className="carousel-wrapper"
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
      onMouseDown={handleSwipeStart}
      onMouseUp={handleSwipeEnd}
    >
      <div className="slide-wrapper">
        {/* Render only the active slide */}
        {slides.map((slide) => (
          <div key={slide.id} className={`slide ${activeSlide === slide.id ? 'active' : ''}`} data-slide={slide.id}>
            <div className="slide-content">
              <img
                className="slide-video"
                src={slide.img}
                alt={`Slide ${slide.id}`}
                loading="lazy" // Lazy loading for images
              />
              <div className="text-overlay">
                <div className="text-content-slider">
                  <p className="subtitle-slider">{slide.subtitle}</p>
                  <h1 className="title-slider">Portfolio</h1>
                  <p className="description-slider">{slide.description}</p>
                </div>
                <p className="background-text-slider">ONI</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="navigation">
        {slides.map((slide) => (
          <a
            key={slide.id}
            href="#"
            className={`nav-dot ${activeSlide === slide.id ? 'active loading' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSlide(slide.id); // Change slide when dot is clicked
              stopAutoplay(); // Stop autoplay on manual navigation
              startAutoplay(); // Restart autoplay after manual navigation
            }}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
