import React from 'react';
import './Footer.scss';


function Footer() {
  return (
    <footer className='footer'>
      <p>
        &copy; {new Date().getFullYear()} Boris Kim
      </p>
    </footer>
  );
}

export default Footer;
