import React from 'react';
import './Navbar.css';
import AceSpade from './assets/Ace_of_spades.png';
import Pin from './assets/pin.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name">
        <img src={AceSpade} alt="Ace of Spades" />
        <div className="title">
          <div>Reuben Thorn</div>
          <div className="subtitle">Software Developer</div>
        </div>
      </div>
      <div className="location">
        <img src={Pin} alt="Location Pin" className="pin-icon" />
        <div>Jhb, South Africa</div>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/reuben-thorn/" className="navbar-item">LinkedIn↗</a>
        <a href="https://drive.google.com/file/d/1Z8N5wRDQctBOiie1-2Oyd7ebVTBUb1-V/view?usp=sharing" className="navbar-item">Resume↗</a>
        <a href="https://github.com/Th0rn4" className="navbar-item">GitHub↗</a>
      </div>
    </div>
  );
};

export default Navbar;