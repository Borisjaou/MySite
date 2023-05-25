import React from 'react';
import './Header.scss';
import logo from '../../images/logo192.png'


function Header() {
  return (
    <header className='header'>
      <img src={logo} className='logo' />
      <div className='menu'>
        <p className='menu-text'>about</p>
        <p className='menu-text'>projects</p>
        <p className='menu-text'>contact</p>
      </div>
    </header >
  );
}

export default Header;
