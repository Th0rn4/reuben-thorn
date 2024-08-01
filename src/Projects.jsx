import React, { useRef, useLayoutEffect } from "react";
import "./Projects.css";
import SMFiles from "./assets/SMFiles.png";
import workip from "./assets/workinprogress.png";
import VanillaTilt from "vanilla-tilt";

const projects = [
  {
    title: "Simple Mac Files",
    link: "https://github.com/Th0rn4/simple-mac-files",
    image: SMFiles,
  },
  {
    title: "YouTube Focus",
    link: "https://example.com/mogic",
    image: workip,
  },
  {
    title: "Sending/group motivation thing",
    link: "https://example.com/mogic",
    image: workip,
  },
];

const Projects = () => {
  const tiltRefs = useRef([]);

  useLayoutEffect(() => {
    tiltRefs.current.forEach((tiltRef) => {
      const tilt = new VanillaTilt(tiltRef, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });

      return () => tilt.destroy();
    });
  }, []);

  return (
    <div className="projects-container">
      {/* Introduction Text */}
      <div className="projects-intro">
        Heyo, I’m Reuben! I’m currently pursuing a Bachelor's degree in
        Information Technology.
      </div>

      <div className="projects-title">Projects</div>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card">
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                ref={(el) => (tiltRefs.current[index] = el)}
                className="project-image-container"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
