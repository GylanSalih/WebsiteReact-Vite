import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard.jsx'; // Import the ProjectCard component

// No need to import images since they're in the public folder

const cardData = [
    { link: '/projects/1', imgSrc: '/assets/img/Cards/3.jpg', altText: 'Project 1', category: 'Coding' },
    { link: '/projects/2', imgSrc: '/assets/gifs/RedSamurai.gif', altText: 'Project 2', category: 'Coding' },
    { link: '/projects/3', imgSrc: '/assets/gifs/Dragon.gif', altText: 'Project 3', category: 'Design' },
    { link: '/projects/4', imgSrc: '/assets/gifs/natureworld.gif', altText: 'Project 4', category: 'Coding' },
];

const ProjectCardsGrid = () => {
  return (
    <div className="main-grid">
      <div className="card-grid">
        {cardData.map((card) => (
          <ProjectCard
            key={card.link}
            link={card.link}
            imgSrc={card.imgSrc} // Correctly passing the image source
            altText={card.altText}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardsGrid;
