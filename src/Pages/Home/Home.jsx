import React from 'react';
import './Home.css'; // Hier importierst du die CSS-Datei

const Home = () => {
  return (
    <div className="page home-page">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi! I'm a passionate developer who loves building creative solutions. Explore my work and learn more about my skills and journey!</p>
      </header>

      <section className="intro">
        <h2>About Me</h2>
        <p>
          I'm a front-end developer with experience in creating modern, responsive web applications. I specialize in
          JavaScript, React, and CSS, and I'm always eager to learn new technologies.
        </p>
        <p>
          When I'm not coding, you can find me experimenting with new design trends, solving algorithm challenges, or
          contributing to open-source projects.
        </p>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Design</li>
          <li>Version Control (Git & GitHub)</li>
          <li>APIs & RESTful Services</li>
        </ul>
      </section>

      <section className="call-to-action">
        <h2>Let's Build Something Amazing Together!</h2>
        <p>If you're looking for a dedicated developer for your next project, feel free to <a href="/contact">contact me</a>. I’d love to collaborate!</p>
      </section>
    </div>
  );
};

export default Home;
