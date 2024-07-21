import React, { useRef } from 'react';
import './Projects.css';
import SMFiles from './assets/SMFiles.png';

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
  // Add more projects as needed
];

const Projects = () => {
  const projectRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const rect = projectRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    projectRefs.current[index].querySelector('.project-image-container').style.transform = `rotateX(${deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
  };

  const handleMouseLeave = (index) => {
    projectRefs.current[index].querySelector('.project-image-container').style.transform = 'rotateX(0) rotateY(0)';
  };

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div
          className="project-card"
          key={index}
          ref={(el) => (projectRefs.current[index] = el)}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
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