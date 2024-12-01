import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoBlack from '../../assets/img/logo/logo_black.png';
import logoWhite from '../../assets/img/logo/logo_white.png';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 35) {
      setIsSticky(true);
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    } else {
      setIsSticky(false);
      setHasScrolled(false);
    }
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (path) => {
    document.documentElement.scrollTop = 0;
    navigate(path);
  };

  // Dark Mode sofort anwenden
  const logo = isDarkMode ? logoWhite : logoBlack;

  return (
    <header
      className={`navbar 
                  ${isSticky ? 'sticky' : ''} 
                  ${isSticky && isDarkMode ? 'dark-mode' : ''} 
                  ${isSticky && !isDarkMode ? 'light-mode' : ''} 
                  ${hasScrolled ? '' : 'no-transition'}
                  `}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={() => handleLinkClick('/')}>
            <img src={logo} alt={isDarkMode ? 'Dark Mode Logo' : 'Light Mode Logo'} />
          </Link>
        </div>

        <nav className="nav-links">
          <ul>
            <li><Link to="/" onClick={() => handleLinkClick('/')}>Home</Link></li>
            <li><Link to="/portfolio" onClick={() => handleLinkClick('/portfolio')}>Portfolio</Link></li>
            <li><Link to="/about" onClick={() => handleLinkClick('/about')}>About</Link></li>
          </ul>
        </nav>

        <div className="darkmode-toggle">
          <button onClick={handleDarkModeToggle}>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
