import React from 'react';
import './Navbar.css';
import AceSpade from './assets/Ace_of_spades.png';
import PinIcon from './assets/pin.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <div className="name">
          <img src={AceSpade} alt="AceSpade" className="ace-icon" />
          <div className="title">
            <div>Reuben Thorn</div>
            <div className="subtitle">Software Developer</div>
          </div>
        </div>
      </div>
      <div className="navbar-item">
        <img src={PinIcon} alt="PinIcon" className="pin-icon" />
        Jhb, South Africa
      </div>
      <div className="navbar-item links">
        <a href="https://www.linkedin.com/">LinkedIn↗</a> <a href="https://www.example.com/">Resume↗</a>  <a href="https://github.com/">GitHub↗</a>
      </div>
    </nav>
  );
};

export default Navbar;
