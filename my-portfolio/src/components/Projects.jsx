import React from "react";
import "../styles/main.css";
import "../styles/projects.css";

import image1 from "../assets/coffee.png";
import image2 from "../assets/lib.png";
import image3 from "../assets/portfolio.png";

const projectsData = [
  {
    title: "Coffee Shop",
    subtitle: "HTML,CSS,JS",
    image: image1,
    link: "http://github.com/eronagojnovci/coffee-shop",
  },
   {
    title: "Portfolio",
    subtitle: "ReactJS,CSS",
    image: image3,
    link: "https://github.com/eronagojnovci/Portfolio1",
  },
  {
    title: "Online Library",
    subtitle: "Java,JavaFX",
    image: image2,
    link: "https://github.com/eronagojnovci/library",
  },

];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Find my projects</h2>
        <div className="projects-count">Here</div>
      </div>
      <div className="projects-divider" aria-hidden="true" />

      <div className="projects-grid">
        {projectsData.slice(0, 3).map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              {project.subtitle && (
                <p className="project-subtitle">{project.subtitle}</p>
              )}
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </a>
        ))}
      </div>

      <div className="projects-footer">
        <a
          href="https://github.com/eronagojnovci"
          className="view-more-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View more on GitHub →
        </a>
      </div>
    </section>
  );
};

export default Projects;
