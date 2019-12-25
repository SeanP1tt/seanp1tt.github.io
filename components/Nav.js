import React, {Fragment} from 'react';

function Nav(){
  return(
    <Fragment>
    <div className="nav" id='nav'>

    <ul>
      <li> <img src='../imgs/favicon.ico'/></li>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    </div>
    </Fragment>
  )
}

export default Nav;
