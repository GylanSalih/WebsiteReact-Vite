import React from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import ProjectCardsGrid from '../../Components/ProjectCardsGrid/ProjectCardsGrid'; // Corrected import path

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>My Portfolio</h1>
      <ProjectCardsGrid /> {/* Render the ProjectCardsGrid component */}
    </div>
  );
};

export default Portfolio;
