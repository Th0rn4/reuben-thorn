import React from 'react';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

const Header = () => {
  return (
    <div className="header">
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default Header;