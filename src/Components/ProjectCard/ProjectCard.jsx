import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'; // Hier importierst du die CSS-Datei

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={project.link} className="btn">Learn More</Link>
    </div>
  );
};

export default ProjectCard;
