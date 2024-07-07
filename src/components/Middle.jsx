import React from 'react';
import locationIcon from '../assets/pin.png'; 

const Middle = () => {
  return (
    <div className="middle">
      <p><img src={locationIcon} alt="Location Icon" className="location-icon" /> Jhb, South Africa</p>
    </div>
  );
};

export default Middle;