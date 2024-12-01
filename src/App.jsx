import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cursor from './Components/Cursor/Cursor';
import './scss/main.scss';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import About from './Pages/About/About';
import Page1 from './Pages/Page1/Page1.jsx'; // Neu hinzugefügt
import Page2 from './Pages/Page2/Page2.jsx'; // Neu hinzugefügt
import Preload from './Components/Preload/Preload';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );
  const [isAppLoaded, setIsAppLoaded] = useState(false); // Zustand, der feststellt, ob die App geladen ist

  // Steuerung, ob Preloader angezeigt werden soll (leicht konfigurierbar)
  const enablePreloader = false; // Setze auf `false`, um den Preloader zu deaktivieren

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }

    if (!enablePreloader) {
      // Wenn der Preloader deaktiviert ist, direkt als geladen markieren
      setIsAppLoaded(true);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newState = !prev;
      localStorage.setItem('darkMode', newState);
      return newState;
    });
  };

  const handleAppLoaded = () => {
    setIsAppLoaded(true); // Wenn alles geladen ist, App anzeigen
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
        {/* Preload nur anzeigen, wenn er aktiviert und die App noch nicht geladen ist */}
        {enablePreloader && !isAppLoaded && <Preload onLoaded={handleAppLoaded} />}

        {/* Wenn die App geladen ist, den Hauptinhalt anzeigen */}
        {(!enablePreloader || isAppLoaded) && (
          <>
            <Cursor />
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/page1" element={<Page1 />} /> {/* Neu */}
                <Route path="/page2" element={<Page2 />} /> {/* Neu */}
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
