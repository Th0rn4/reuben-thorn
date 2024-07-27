import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
};

export default App;
