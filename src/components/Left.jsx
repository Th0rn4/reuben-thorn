import React from 'react';
import AceSpade from '../assets/Ace_of_spades.png'; 

const Left = () => {
  return (
    <div className="left">
      <div className="name-container">
        <img src={AceSpade} alt="AceSpade" className="ace-icon" />
        <div className="text-container">
          <h1>Reuben Thorn</h1>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Left;