import React from "react";
import "./About.css";
import profileImage from "./assets/Me.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src={profileImage} alt="Reuben Thorn" />
      </div>
      <div className="about-content">
        <div className="about-section about-center">
          <h2>About</h2>
          <p>
            Reuben develops software with a focus on interactive media and
            digital tooling. He is currently pursuing a Bachelor's degree in
            Information Technology at{" "}
            <a href="https://www.nwu.ac.za">North-West University</a>.
          </p>
          <p>
            An all-rounder with a passion for learning, Reuben loves to
            experiment with new technologies and is always up for a challenge.
          </p>
          <p>
            If you have an interesting idea or would like to collaborate, please{" "}
            <a href="mailto:reuben.j.thorn@gmail.com">get in touch</a>.
          </p>
          <a
            href="https://drive.google.com/file/d/1x0hQBHBXQfeeXulO7jF3rY9fCYxgG3Ay/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <button className="resume-button">View Resume</button>
          </a>
        </div>
        <div className="about-section about-right">
          <div className="skills-section">
            <h2>Skills</h2>
            <p>
              Dart/Flutter
              <br />
              C++
              <br />
              C#
              <br />
              Java
            </p>
          </div>
          <div className="story-section">
            <h2>Story</h2>
            <p>
              2022-2024
              <br />
              Pursuing Bachelor's in Information Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
