import React from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import './Portfolio.css'; // Hier importierst du die CSS-Datei


const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'A description of Project 1', link: '/project-1' },
    { id: 2, title: 'Project 2', description: 'A description of Project 2', link: '/project-2' },
    { id: 3, title: 'Project 3', description: 'A description of Project 3', link: '/project-3' },
  ];

  return (
    <div className="page portfolio-page">
      <h2>My Portfolio</h2>
      <div className="portfolio-cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
