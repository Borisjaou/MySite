import React from 'react';
import './Loader.scss'
import skills from '../../images/skills.gif'

function Loader() {

  return (
    <div className='loader'>
      <img className='loader-image' src={skills}></img>
    </div>
  );
}

export default Loader;
