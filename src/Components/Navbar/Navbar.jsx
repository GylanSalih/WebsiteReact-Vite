import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle.jsx";
import './Navbar.css'; // Import the CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About Me</Link></li>
        </ul>
        {/* Dark mode toggle is added here */}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
