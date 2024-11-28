import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CardGrid = () => {
  // Referenzen für alle Karten
  const cardRefs = useRef([]);

  const handleMouseMove = (e, card) => OrientCard(e, card);
  const handleMouseLeaveEvent = (card) => handleMouseLeave(card);

  // Effekt und Animationen mit GSAP
  useEffect(() => {
    const initialStyles = new WeakMap();

    function saveInitialStyles(card) {
      const computedStyle = window.getComputedStyle(card);

      initialStyles.set(card, {
        transform: computedStyle.transform || "rotateX(0deg) rotateY(0deg) scale(1)",
        mx: computedStyle.getPropertyValue("--mx").trim() || "0%",
        my: computedStyle.getPropertyValue("--my").trim() || "0%",
        s: computedStyle.getPropertyValue("--s").trim() || "1",
        o: computedStyle.getPropertyValue("--o").trim() || "1",
        pos: computedStyle.getPropertyValue("--pos").trim() || "0% 0%",
        posx: computedStyle.getPropertyValue("--posx").trim() || "0%",
        posy: computedStyle.getPropertyValue("--posy").trim() || "0%",
        hyp: computedStyle.getPropertyValue("--hyp").trim() || "0",
        galaxybg: computedStyle.getPropertyValue("--galaxybg").trim() || "initial",
      });
    }

    function OrientCard(e, card) {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mvX = e.clientX - centerX;
      const mvY = e.clientY - centerY;

      const maxTilt = 15;
      const Xdeg = Math.min(Math.max((-mvY / (rect.height / 2)) * maxTilt, -maxTilt), maxTilt);
      const Ydeg = Math.min(Math.max((mvX / (rect.width / 2)) * maxTilt, -maxTilt), maxTilt);

      const hyp = Math.min(Math.sqrt(mvX ** 2 + mvY ** 2) / 50, 1);
      card.style.setProperty("--mx", `${50 - Ydeg * 2}%`);
      card.style.setProperty("--my", `${50 + Xdeg * 2}%`);
      card.style.setProperty("--hyp", `${hyp}`);

      gsap.to(card, {
        duration: 0.5,
        transform: `rotateX(${Xdeg}deg) rotateY(${Ydeg}deg) scale(1.05)`,
        "--mx": `${50 - Ydeg * 2}%`,
        "--my": `${50 + Xdeg * 2}%`,
        "--posx": `${50 + Ydeg / 2 + Xdeg * 0.5}%`,
        "--posy": `${50 + Xdeg / 2 + Ydeg / 2}%`,
        ease: "power4.out",
      });

      const shine = card.querySelector(".card__shine");
      const glare = card.querySelector(".card__glare");
      gsap.to(shine, {
        duration: 2.5,
        delay: 0.1,
        backgroundPosition: `${50 - (mvX / rect.width) * 100}% ${50 + (mvY / rect.height) * 100}%`,
        ease: "power2.out",
      });
      
      gsap.to(glare, {
        duration: 2.5,
        delay: 0.1,
        backgroundPosition: `${50 - (mvX / rect.width) * 50}% ${50 + (mvY / rect.height) * 50}%`,
        ease: "power2.out",
      });
    }

    function handleMouseLeave(card) {
      gsap.killTweensOf(card);

      gsap.to(card, {
        duration: 0.6,
        transform: "rotateX(0deg) rotateY(0deg) scale(1)",
        ease: "power3.out",
      });

      const shine = card.querySelector(".card__shine");
      const glare = card.querySelector(".card__glare");

      if (shine) {
        gsap.to(shine, {
          duration: 1.0,
          backgroundPosition: "50% 50%",
          ease: "sine.out",
        });
      }
      if (glare) {
        gsap.to(glare, {
          duration: 1.0,
          backgroundPosition: "50% 50%",
          ease: "sine.out",
        });
      }
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        saveInitialStyles(card);
        card.addEventListener("mousemove", (e) => OrientCard(e, card));
        card.addEventListener("mouseleave", () => handleMouseLeave(card));
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", (e) => OrientCard(e, card));
          card.removeEventListener("mouseleave", () => handleMouseLeave(card));
        }
      });
    };
  }, []);

  const cardsData = [
    { imgSrc: "/src/assets/img/reduced_images/New3.jpeg", link: "/SingleCard", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/src/assets/gifs/RedSamurai.gif", link: "/public/Card1.html", category: "Coding", rarity: "rare holo vmax" },
    { imgSrc: "/src/assets/gifs/Dragon.gif", link: null, category: "holo", rarity: "rare holo" },
    { imgSrc: "/src/assets/gifs/natureworld.gif", link: null, category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/src/assets/img/reduced_images/New5.jpeg", link: null, category: "Design", rarity: "radiant" },
    { imgSrc: "/src/assets/img/reduced_images/New6.jpeg", link: null, category: "Marketing", rarity: "ShineBlitz" },
    { imgSrc: "/src/assets/img/reduced_images/New7.jpg", link: null, category: "Super Selten", rarity: "rare rainbow" },
  ];

  return (
    <div className="main-grid">
      <div className="card-grid">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="holographic__section"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <a href={card.link || "#"} className="transition-link">
              <div
                className="card holographic"
                data-rarity={card.rarity}
                data-category={card.category}
              >
                <div className="card__effects">
                  <img
                    src={card.imgSrc}
                    alt={`Card ${index}`}
                    className="card_images"
                    loading="lazy"
                  />
                  <div className="card__shine"></div>
                  <div className="card__glare"></div>
                </div>
                <div className="project-hover-block">
                  <div>View Project</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
