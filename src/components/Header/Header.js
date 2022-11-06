import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header>
      <div className='header'>
        <Navigation />
      </div>
    </header>
  );
}
export default Header;
