import React from 'react';
import './Header.scss';
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
        <p>Front-End developer</p>
        <h2>The website is under development</h2>
        <p>You can see my work here:</p>
        <div className='header__link'>
          <a target='_blank' className='header__link_ref' href='https://your-movie-explorer-fr.nomoredomains.work/' rel="noreferrer">MovieExplorer</a>
          <a target='_blank' className='header__link_ref' href='https://pomodoro.borisjaou.com/' rel="noreferrer">PomodoroTimer</a>
          <a target='_blank' href='https://study.borisjaou.com/' className='header__link_ref'>Static web page</a> {/* учиться */}
          <a target='_blank' href='https://explorer.borisjaou.com/' className='header__link_ref'>Adaptive web site</a> {/* путешествия по ру */}
          <a target='_blank' href='https://mesto.borisjaou.com/' className='header__link_ref'>SPA</a> {/* фото и лайки */}

        </div>
      </div>


    </header >
  );
}

export default Header;
