import React, { useRef, useState, useLayoutEffect } from 'react';
import './Projects.css';
import SMFiles from './assets/SMFiles.png';
import VanillaTilt from 'vanilla-tilt';

const projects = [
  {
    title: 'Simple Mac Files',
    description: 'Effortlessly sort your files with SMFiles. Automatically categorize and store files into predefined folders, saving you from manual sorting. Streamline your file management and boost productivity with ease.',
    link: 'https://github.com/Th0rn4/simple-mac-files',
    image: SMFiles
  },
  {
    title: 'YouTube Focus',
    description: 'A furniture-renting service for college students to design, assemble, and return sustainable furniture with minimal effort',
    link: 'https://example.com/mogic',
    image: 'link-to-image-2'
  },
  {
    title: 'Sending/group motivation thing',
    description: 'A furniture-renting service for college students to design, assemble, and return sustainable furniture with minimal effort',
    link: 'https://example.com/mogic',
    image: 'link-to-image-2'
  }
];

const Projects = () => {
  const tiltRefs = useRef([]);

  useLayoutEffect(() => {
    tiltRefs.current.forEach((tiltRef) => {
      const tilt = new VanillaTilt(tiltRef, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });

      return () => tilt.destroy();
    });
  }, []);

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={project.title} className="project-card">
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            <div
              ref={(el) => (tiltRefs.current[index] = el)}
              className="project-image-container"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px)',
              }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;