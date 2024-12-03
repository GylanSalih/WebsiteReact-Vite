import React, { useEffect } from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui'; 
import HolographicCard from '../../Components/HolographicCard/HolographicCard'; // Importiere die neue Komponente

const Portfolio = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      infinite: false,
      toolbar: true,
      arrows: true,
    });

    return () => Fancybox.destroy();
  }, []);

  return (
    <>
      {/* Hero-Card */}
      <div className="section_project_header">
        <div className="project-hero1">
          <div className="overlay"></div>
          <img
            src="/src/assets/img/reduced_images/redsword-img.png"
            alt="Hero Background"
            className="hero-img"
          />
        </div>

        <div className="project-hero_container">
          <div className="card-grid2">
            <HolographicCard
              imgSrc="/src/assets/img/reduced_images/New1.jpeg"
              category="Coding"
              rarity="radiant"
            />
          </div>

          <div className="project_hero_blurb_container">
            <h1 className="heading-1">My First Project</h1>
            <h4 className="heading-4">2024</h4>
            <p className="bio-paragraph">
              Welcome to my first project! This space is dedicated to showcasing my journey into the world of [insert your project topic here]. As I embark on this exciting adventure, I'm filled with anticipation and enthusiasm. Stay tuned as I share my progress, challenges, and triumphs. Together, let's explore the endless possibilities and creativity that this project holds. Thank you for joining me on this incredible journey!
              <br />
              <br />
              Join me on this odyssey of creation, where every line of code and every brushstroke tells a story. Together, let's unravel the mysteries of creativity and embark on a journey that transcends the confines of the digital realm.
              <br />
              <br />
              Made by XYZ. Visit Github for more{" "}
              <a
                className="text-link purple_link"
                href="https://github.com/xyz"
                target="_blank"
                rel="noreferrer"
              >
                XYZ
              </a>. Thank you for being a part of this extraordinary voyage. Together, we'll redefine the limits of possibility and pave the way for a brighter, more imaginative future.
            </p>
          </div>
        </div>
      </div>

      {/* Tags / Infos */}
      <div className="section_project_cast">
        <div className="Descriptioncontainer">
          <h2 className="heading-2">Project Includes</h2>
          <div className="cast_includes_div">
            {[
              { title: "Date", content: "31.05.2024" },
              { title: "Tags", content: "HTML/CSS, JS" },
              { title: "Inspiration", content: "Gylan" },
              { title: "Topic", content: "Gylan" },
            ].map(({ title, content }) => (
              <div className="cast_block" key={title}>
                <h5>{title}</h5>
                <p className="Cast Names">{content}</p>
              </div>
            ))}
            <div className="smalldescription">
              <h5>Description</h5>
              <p className="Cast Names">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dicta sapiente fugit praesentium omnis unde officiis fugiat dolorem doloribus sed magnam quasi, ad nemo cupiditate veritatis minus amet, maxime quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus. Dolorem eveniet incidunt esse fugiat eos impedit neque molestiae illum numquam voluptate. Repellat hic delectus, ullam quidem excepturi sapiente asdipisci.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery">
        {[
          "New1.jpeg",
          "New2.jpeg",
          "New3.jpeg",
          "New4.jpg",
          "New5.jpeg",
          "New6.jpeg",
          "New7.jpg",
          "redsword-img.png",
        ].map((image, index) => (
          <a
            key={index}
            data-fancybox="gallery"
            href={`/src/assets/img/reduced_images/${image}`}
          >
            <img
              src={`/src/assets/img/reduced_images/${image}`}
              alt={`Thumbnail ${index + 1}`}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
