import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-section about-left">
        <h2>About</h2>
        <p>
          Reuben develops software with a focus on interactive media and digital
          tooling. He is currently pursuing a Bachelor's degree in Information
          Technology at{" "}
          <a href="https://www.nwu.ac.za">North-West University</a>.
        </p>
        <p>
          An all-rounder with a passion for learning, Reuben loves to experiment
          with new technologies and is always up for a challenge.
        </p>
        <p>
          If you have an interesting idea or would like to collaborate, please{" "}
          <a href="mailto:reuben.j.thorn@gmail.com">get in touch</a>.
        </p>
      </div>
      <div className="about-section about-center">
        <h2> Skills</h2>
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
      <div className="about-section about-right">
        <h2>Story</h2>
        <p>
          2022-2024
          <br />
          Pursuing Bachelor's in Information Technology
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
