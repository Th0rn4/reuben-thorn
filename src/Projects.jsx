// src/Projects.jsx
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Meta CodeHub',
    description: 'A centralized platform designed to help engineers manage and access project documentation',
    link: 'https://example.com/meta-codehub',
    image: 'link-to-image-1' // Replace with actual image link
  },
  {
    title: 'Mogic',
    description: 'A furniture-renting service for college students to design, assemble, and return sustainable furniture with minimal effort',
    link: 'https://example.com/mogic',
    image: 'link-to-image-2' // Replace with actual image link
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
