import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-section about-left">
        <h2>About</h2>
        <p>
          Reuben developes software for programs. He thrives in complex,
          ambiguous problem spaces focused around interactive media, digital
          tooling, and multimodal interaction. He studied{" "}
          <a href="#">Communication Design</a> and{" "}
          <a href="#">Human-Computer Interaction</a> at Carnegie Mellon
          University, an experience he holds fondly and will cherish for the
          rest of his life. If you have an interesting idea, please{" "}
          <a href="#">get in touch</a>.
        </p>
      </div>
      <div className="about-section about-center">
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
      <div className="about-section about-right">
        <h2>Story</h2>
        <p>
          2022-2024
          <br />
          Completed Bachlors in Information Technology
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
