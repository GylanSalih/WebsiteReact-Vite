// src/components/DarkModeToggle/DarkModeToggle.jsx
import { useState, useEffect } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <div className={`toggle-btn ${darkMode ? 'dark' : ''}`}></div>
    </div>
  );
};

export default DarkModeToggle;
