import React, {Fragment} from 'react';

function Nav(){
  return(
    <Fragment>
    <div className="nav" id='nav'>

    <ul>
      <span className='left'><li className="logo"> <img src='../imgs/favicon.ico'/></li></span>
      <span className='right'>
      <li><a href="#home">Home</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      </span>
    </ul>
    </div>
    </Fragment>
  )
}

export default Nav;
