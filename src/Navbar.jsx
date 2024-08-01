import React, { useState, useEffect } from "react";
import "./Navbar.css";
import AceSpade from "./assets/Ace_of_spades.png";
import Pin from "./assets/pin.png";

const Navbar = () => {
  const [typing, setTyping] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTyping(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll down
        setNavbarHidden(true);
      } else {
        // Scroll up
        setNavbarHidden(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`navbar ${navbarHidden ? "hidden" : ""}`}>
      <div className="name">
        <img src={AceSpade} alt="Ace of Spades" />
        <div className="title">
          <div style={{ textAlign: "center" }}>
            <span className="typed-text">Reuben Thorn</span>
          </div>
          <div className="subtitle">Software Developer</div>
        </div>
      </div>
      <div className="location">
        <img src={Pin} alt="Location Pin" className="pin-icon" />
        <div>Jhb, South Africa</div>
      </div>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/reuben-thorn/"
          className="navbar-item"
        >
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/1x0hQBHBXQfeeXulO7jF3rY9fCYxgG3Ay/view?usp=sharing"
          className="navbar-item"
        >
          Resume
        </a>
        <a href="https://github.com/Th0rn4" className="navbar-item">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Navbar;
