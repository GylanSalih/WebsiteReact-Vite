import React, { useEffect } from 'react';
import './App.css';  // Assuming you've converted your CSS into a file
import $ from 'jquery';
import { Fancybox } from '@fancyapps/ui';
import lottie from 'lottie-web';

const Portfolio = () => {

  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind('[data-fancybox="gallery"]');

    // Custom cursor script
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
      cursorFollower.style.left = `${e.clientX}px`;
    });

    // Dark mode toggle animation
    // Lottie animation example, adjust as needed
    lottie.loadAnimation({
      container: document.getElementById('lottieLight'),
      animationData: {/* your Lottie animation JSON for light mode */},
      renderer: 'svg',
      loop: true,
      autoplay: true
    });

    lottie.loadAnimation({
      container: document.getElementById('lottieDark'),
      animationData: {/* your Lottie animation JSON for dark mode */},
      renderer: 'svg',
      loop: true,
      autoplay: true
    });

    return () => {
      // Cleanup if necessary, especially for animations
      Fancybox.destroy();
    }
  }, []);

  return (
    <div>
      {/* Menu Design */}
      <nav className="top_navigation_container">
        <div className="container">
          <span className="special_span"></span> {/* Light Effect Header */}
          <div className="logo">
            <a href="/index.html">
              <img src="/src/assets/img/logo/logo_black.png" alt="Light Logo" id="logoLight" className="logo-img" />
              <img src="/src/assets/img/logo/logo_white.png" alt="Dark Logo" id="logoDark" className="logo-img" />
            </a>
          </div>

          <div className="menu">
            <div className="menu-left">
              <nav className="menu">
                <div className="menu__item">
                  <a className="menu__item-link" href="/public/portfolio.html">Portfolio</a>
                  <div className="marquee">
                    <div className="marquee__inner">
                      <span>Portfolio</span>
                      <span>Portfolio</span>
                      <span>Portfolio</span>
                      <span>Portfolio</span>
                    </div>
                  </div>
                </div>

                <div className="menu__item">
                  <a className="menu__item-link" href="/public/Pages/skills.html">Skills</a>
                  <div className="marquee">
                    <div className="marquee__inner">
                      <span>Skills</span>
                      <span>Skills</span>
                      <span>Skills</span>
                      <span>Skills</span>
                    </div>
                  </div>
                </div>

                <div className="menu__item">
                  <a className="menu__item-link" href="/public/Pages/about.html">About</a>
                  <div className="marquee">
                    <div className="marquee__inner">
                      <span>About</span>
                      <span>About</span>
                      <span>About</span>
                      <span>About</span>
                    </div>
                  </div>
                </div>

                <div className="menu__item">
                  <a className="menu__item-link" href="/public/Pages/contact.html">Contact</a>
                  <div className="marquee">
                    <div className="marquee__inner">
                      <span>Contact</span>
                      <span>Contact</span>
                      <span>Contact</span>
                      <span>Contact</span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="hamburger">
            <div className="btn not-active">
              <span className="spanmenu"></span>
              <span className="spanmenu"></span>
              <span className="spanmenu"></span>
            </div>
          </div>

          <div className="dark-mode-toggle" id="darkModeToggle">
            <div id="lottieLight" style={{ display: 'none' }}></div>
            <div id="lottieDark" style={{ display: 'block' }}></div>
          </div>
        </div>
      </nav>

      {/* Hero-Card */}
      <div className="section_project_header">
        <div className="project-hero1">
          <div className="overlay"></div>
          <img src="/src/assets/img/reduced_images/redsword-img.png" alt="Background" className="hero-img" />
        </div>

        <div className="project-hero_container">
          <div className="card-grid2">
            <div className="holographic__section">
              <a href="Card1.html" className="card-link">
                <div id="acard2" className="card holographic" data-rarity="rare holo" data-category="Selten">
                  <div className="card__effects">
                    <img src="/src/assets/img/reduced_images/New1.jpeg" className="card_images" alt="Card Image" />
                    <div className="card__shine"></div>
                    <div className="card__glare"></div>
                  </div>
                  <div className="project-hover-block">
                    <div>View Project</div>
                  </div>
                </div>
              </a>
            </div>
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
              Made by XYZ. Visit Github for more{' '}
              <a className="text-link purple_link" href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
                XYZ
              </a>
              . Thank you for being a part of this extraordinary voyage.
            </p>
          </div>
        </div>
      </div>

      {/* Tags / Infos */}
      <div className="section_project_cast">
        <div className="Descriptioncontainer">
          <h2 className="heading-2">Project Includes</h2>
          <div className="cast_includes_div">
            <div className="cast_block">
              <h5>Date</h5>
              <p className="Cast Names">31.05.2024</p>
            </div>
            <div className="cast_block">
              <h5>Tags</h5>
              <p className="Cast Names">HTML/CSS, JS</p>
            </div>
            <div className="cast_block">
              <h5>Inspiration</h5>
              <p className="Cast Names">Gylan</p>
            </div>
            <div className="cast_block">
              <h5>Topic</h5>
              <p className="Cast Names">Gylan</p>
            </div>
            <div className="smalldescription">
              <h5>Description</h5>
              <p className="Cast Names">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dicta sapiente fugit praesentium omnis unde officiis fugiat dolorem doloribus
                sed magnam quasi, ad nemo cupiditate veritatis minus amet, maxime quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus.
                Dolorem eveniet incidunt esse fugiat eos impedit neque molestiae illum numquam voluptate. Repellat hic delectus, ullam quidem excepturi sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery">
        <a data-fancybox="gallery" href="/src/assets/img/reduced_images/New1.jpeg">
          <img src="/src/assets/img/reduced_images/New1.jpeg" alt="Thumbnail 1" />
        </a>
        <a data-fancybox="gallery" href="/src/assets/img/reduced_images/New2.jpeg">
          <img src="/src/assets/img/reduced_images/New2.jpeg" alt="Thumbnail 2" />
        </a>
        <a data-fancybox="gallery" href="/src/assets/img/reduced_images/New3.jpeg">
          <img src="/src/assets/img/reduced_images/New3.jpeg" alt="Thumbnail 3" />
        </a>
        <a data-fancybox="gallery" href="/src/assets/img/reduced_images/New4.jpg">
          <img src="/src/assets/img/reduced_images/New4.jpg" alt="Thumbnail 4" />
        </a>
        <a data-fancybox="gallery" href="/src/assets/img/reduced_images/New5.jpeg">
          <img src="/src/assets/img/reduced_images/New5.jpeg" alt="Thumbnail 1" />
        </a>
        <a data-fancybox="gallery" href="/src/assets/img/reduced_images/New6.jpeg">
          <img src="/src/assets/img/reduced_images/New6.jpeg" alt="Thumbnail 2" />
        </a>
        <a data-fancybox="gallery" href="/src/assets/img/reduced_images/New7.jpg">
          <img src="/src/assets/img/reduced_images/New7.jpg" alt="Thumbnail 3" />
        </a>
        <a data-fancybox="gallery" href="/src/assets/img/reduced_images/redsword-img.png">
          <img src="/src/assets/img/reduced_images/redsword-img.png" alt="Thumbnail 4" />
        </a>
      </div>

      {/* Custom Cursor */}
      <div className="Custom-Cursor">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
    </div>
  );
}

export default Portfolio;
