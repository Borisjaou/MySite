import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header header__background'>

      <div className='header__menu'>
        <Navigation />
      </div>
      <div className='header__text'>
        <h2>Hello!</h2>
        <h1>I'm Boris</h1>
        <p>Front-End deveoper</p>
        <p>and this is my site</p>
      </div>


    </header >
  );
}

export default Header;
