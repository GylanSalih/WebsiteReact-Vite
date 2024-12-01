import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lottieLightContainer = useRef(null);
  const lottieDarkContainer = useRef(null);
  const lottieLight = useRef(null);
  const lottieDark = useRef(null);

  useEffect(() => {
    // Prüfe, ob der Dark Mode im localStorage gespeichert ist
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);

    // Lottie-Animationen nur einmal laden
    if (!lottieLight.current && !lottieDark.current) {
      lottieLight.current = lottie.loadAnimation({
        container: lottieLightContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/assets/Animations/lottiewhite.json', // Pfad zu deiner Light-Animation
      });

      lottieDark.current = lottie.loadAnimation({
        container: lottieDarkContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/assets/Animations/lottieblack.json', // Pfad zu deiner Dark-Animation
      });
    }

    // Dark Mode direkt beim Laden anwenden
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
      lottieLightContainer.current.style.display = 'none';
      lottieDarkContainer.current.style.display = 'block';
    } else {
      document.body.classList.remove('dark-mode');
      lottieLightContainer.current.style.display = 'block';
      lottieDarkContainer.current.style.display = 'none';
    }

    return () => {
      // Aufräumen der Lottie-Animationen, wenn der Effekt nicht mehr gebraucht wird
      if (lottieLight.current) lottieLight.current.destroy();
      if (lottieDark.current) lottieDark.current.destroy();
    };
  }, []);

  // Dark Mode aktivieren/deaktivieren
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newState = !prev;
      // Zustand im localStorage speichern
      localStorage.setItem('darkMode', newState);

      // Dark Mode direkt anwenden
      if (newState) {
        document.body.classList.add('dark-mode');
        lottieLightContainer.current.style.display = 'none';
        lottieDarkContainer.current.style.display = 'block';
      } else {
        document.body.classList.remove('dark-mode');
        lottieLightContainer.current.style.display = 'block';
        lottieDarkContainer.current.style.display = 'none';
      }

      return newState;
    });
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <header>
        <div className="logo">
          <div ref={lottieLightContainer} className="lottie-light" style={{ display: 'none' }}></div>
          <div ref={lottieDarkContainer} className="lottie-dark" style={{ display: 'none' }}></div>
        </div>
        <button id="darkModeToggle" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </header>
    </div>
  );
};

export default App;
