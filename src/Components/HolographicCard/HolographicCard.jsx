import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const HolographicCard = ({ imgSrc, link, category, rarity }) => {
  const cardRef = useRef(null);
  const [styleVars, setStyleVars] = useState({
    '--mx': '0%',
    '--my': '0%',
    '--posx': '0%',
    '--posy': '0%',
    '--hyp': '0',
    transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
  });

  useEffect(() => {
    const card = cardRef.current;
    let requestId;

    // Funktion zur Speicherung der initialen Styles
    const initialStyles = new WeakMap();

    function saveInitialStyles(card) {
      const computedStyle = window.getComputedStyle(card);
      initialStyles.set(card, {
        transform: computedStyle.transform || 'rotateX(0deg) rotateY(0deg) scale(1)',
        mx: computedStyle.getPropertyValue('--mx').trim() || '0%',
        my: computedStyle.getPropertyValue('--my').trim() || '0%',
        s: computedStyle.getPropertyValue('--s').trim() || '1',
        o: computedStyle.getPropertyValue('--o').trim() || '1',
        pos: computedStyle.getPropertyValue('--pos').trim() || '0% 0%',
        posx: computedStyle.getPropertyValue('--posx').trim() || '0%',
        posy: computedStyle.getPropertyValue('--posy').trim() || '0%',
        hyp: computedStyle.getPropertyValue('--hyp').trim() || '0',
        galaxybg: computedStyle.getPropertyValue('--galaxybg').trim() || 'initial',
      });
    }

    // Funktion zur Mausbewegung mit requestAnimationFrame für bessere Performance
    const OrientCard = (e) => {
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mvX = e.clientX - centerX;
        const mvY = e.clientY - centerY;

        const maxTilt = 15;
        const Xdeg = Math.min(Math.max((-mvY / (rect.height / 2)) * maxTilt, -maxTilt), maxTilt);
        const Ydeg = Math.min(Math.max((mvX / (rect.width / 2)) * maxTilt, -maxTilt), maxTilt);
        const hyp = Math.min(Math.sqrt(mvX ** 2 + mvY ** 2) / 50, 1);

        // Update der CSS-Variablen
        setStyleVars({
          '--mx': `${50 - Ydeg * 2}%`,
          '--my': `${50 + Xdeg * 2}%`,
          '--posx': `${50 + Ydeg / 2 + Xdeg * 0.5}%`,
          '--posy': `${50 + Xdeg / 2 + Ydeg / 2}%`,
          '--hyp': `${hyp}`,
          transform: `rotateX(${Xdeg}deg) rotateY(${Ydeg}deg) scale(1.05)`,
        });

        gsap.to(card, {
          duration: 0.3, // Verlangsamte Animation für die Rotation
          transform: `rotateX(${Xdeg}deg) rotateY(${Ydeg}deg) scale(1.05)`,
          '--mx': `${50 - Ydeg * 2}%`,
          '--my': `${50 + Xdeg * 2}%`,
          '--posx': `${50 + Ydeg / 2 + Xdeg * 0.5}%`,
          '--posy': `${50 + Xdeg / 2 + Ydeg / 2}%`,
          '--hyp': hyp,
          '--s': initialStyles.get(card).s,
          '--o': initialStyles.get(card).o,
          '--galaxybg': initialStyles.get(card).galaxybg,
          ease: 'power4.out',
        });

        const shine = card.querySelector('.card__shine');
        const glare = card.querySelector('.card__glare');
        gsap.to(shine, {
          duration: 2.0, // Verlangsamte Animation für den Glanz
          delay: 0.1,
          backgroundPosition: `${50 - (mvX / rect.width) * 100}% ${50 + (mvY / rect.height) * 100}%`,
          ease: 'power2.out',
        });

        gsap.to(glare, {
          duration: 2.0, // Verlangsamte Animation für den Glanz
          delay: 0.1,
          backgroundPosition: `${50 - (mvX / rect.width) * 50}% ${50 + (mvY / rect.height) * 50}%`,
          ease: 'power2.out',
        });
      });
    };

    // Funktion zum Zurücksetzen der Transformation bei Mausverlassen
    const handleMouseLeave = () => {
      cancelAnimationFrame(requestId); // Animationen abbrechen, wenn Maus die Karte verlässt
      gsap.killTweensOf(card); // Alle Tween-Animationen stoppen
    
      gsap.to(card, {
        duration: 0.6,
        transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
        ease: 'power3.out',
      });
    
      // Zurücksetzen der CSS-Variablen auf ihre ursprünglichen Werte
      setStyleVars({
        '--mx': '0%',
        '--my': '0%',
        '--posx': '0%',
        '--posy': '0%',
        '--hyp': '0',
        transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
      });
    
      const shine = card.querySelector('.card__shine');
      const glare = card.querySelector('.card__glare');
      if (shine) {
        gsap.to(shine, {
          duration: 1.0,
          backgroundPosition: '50% 50%',
          ease: 'sine.out',
        });
      }
      if (glare) {
        gsap.to(glare, {
          duration: 1.0,
          backgroundPosition: '50% 50%',
          ease: 'sine.out',
        });
      }
    };
    
    // Initial Styles speichern und Event Listener hinzufügen
    if (card) {
      saveInitialStyles(card);
      card.addEventListener('mousemove', OrientCard);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', OrientCard);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(requestId); // Cleanup
    };
  }, []);

  return (
    <div className="holographic__section" ref={cardRef}>
      <a href={link || "#"} className="card-link">
        <div
          className="card holographic"
          data-rarity={rarity}
          data-category={category}
          style={{
            ...styleVars, // Dynamische CSS-Variablen anwenden
            transition: 'transform 0.0s ease', // kein übergang aber trotzdem da lassen!
          }}
        >
          <div className="card__effects">
            <img
              src={imgSrc}
              alt="Card"
              className="card_images"
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
  );
};

export default HolographicCard;
