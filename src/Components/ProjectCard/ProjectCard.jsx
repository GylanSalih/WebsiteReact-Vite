import React from 'react';
import { Link } from 'react-router-dom'; // Verwende Link für Navigation

const ProjectCard = ({ link, imgSrc, altText, category }) => {
  return (
    <div className="holographic__section">
      <Link to={link} className="transition-link"> {/* Link statt <a> */}
        <div className="card holographic" data-category={category}>
          <div className="card__effects">
            <img src={imgSrc} alt={altText} className="card_images" loading="lazy" />
            <div className="card__shine"></div>
            <div className="card__glare"></div>
          </div>
          <div className="project-hover-block" aria-label="View Project">
            <div>View Project</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
