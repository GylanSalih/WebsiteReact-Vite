import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // Zustandsvariable für Scroll-Status
  const [isTransitioning, setIsTransitioning] = useState(true); // Zustand für Transition-Handling

  const handleScroll = () => {
    if (window.scrollY > 35) {
      setIsSticky(true);
      if (!hasScrolled) {
        setHasScrolled(true); // Beim ersten Scrollen Transition aktivieren
      }
    } else {
      setIsSticky(false);
    }
  };

  // Funktion, die beim Wechsel des Dark Modes die Transition entfernt
  const handleDarkModeToggle = () => {
    // Übergang sofort deaktivieren
    setIsTransitioning(false);

    // Dark Mode Toggle auslösen
    toggleDarkMode();

    // Übergang nach 50ms wieder aktivieren (damit er beim nächsten Scrollen wieder funktioniert)
    setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar ${isSticky ? 'sticky' : ''} 
                  ${isSticky && isDarkMode ? 'dark-mode' : ''} 
                  ${isSticky && !isDarkMode ? 'light-mode' : ''} 
                  ${hasScrolled ? '' : 'no-transition'}  // Verhindert Transition beim ersten Scrollen
                  ${!isTransitioning ? 'no-transition' : ''}`} // Keine Transition beim Dark Mode Toggle
    >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            {isDarkMode ? (
              <img src="/assets/img/logo/logo_white.png" alt="Dark Mode Logo" />
            ) : (
              <img src="/assets/img/logo/logo_black.png" alt="Light Mode Logo" />
            )}
          </Link>
        </div>

        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <div className="darkmode-toggle">
          <button onClick={handleDarkModeToggle}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
