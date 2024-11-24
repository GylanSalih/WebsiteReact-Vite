import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio'; // Correct import
import About from './Pages/About/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
