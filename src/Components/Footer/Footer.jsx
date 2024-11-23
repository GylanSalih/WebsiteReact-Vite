import React from 'react';
import './Footer.css'; // Hier importierst du die CSS-Datei

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LI</a>
      </div>
    </footer>
  );
};


export default Footer;
