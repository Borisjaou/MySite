import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
  return (
    <section className='navigation'>
      <input type='checkbox' id='menu' />
      <label htmlFor='menu' className='checkbox-button'>
        <span className='line line-main' />
        <span className='line line-split' />
      </label>
      {/*       <nav className='navigation-menu'>
        <div className='menu__link'>
          <a href='/' className='navigation-menu-list'>Главная</a>
          <a href='/movies' className='navigation-menu-list'>Фильмы</a>
          <a href='/saved-movies' className='navigation-menu-list'>Сохранённые</a>
        </div>

      </nav> */}

      <div className='navigation-menu'>
        <div className='navigation__link'>
          <Link to='/' className='navigation__list'>Home</Link>
          <Link to='/' className='navigation__list'>About Me</Link>
          <Link to='/' className='navigation__list'>Skills</Link>
          <Link to='/' className='navigation__list'>Projects</Link>
          <Link to='/' className='navigation__list'>Contacts</Link>

        </div>

      </div>

    </section>
  );
}

export default Navigation;
