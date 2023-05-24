import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';


function Header() {
  return (
    <header className='header'>
      <p className='logo'>Boris Kim</p>
      <Navigation />
    </header >
  );
}

export default Header;
