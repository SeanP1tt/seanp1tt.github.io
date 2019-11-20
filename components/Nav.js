import React, {Fragment} from 'react';

function Nav(){
  return(
    <Fragment>
    <div id="hamburger-button">
          <span></span>
          <span></span>
          <span></span>
  </div>
    <div className="nav">
      <i className="fas fa-bars"></i>
      <img src="imgs/cropped-headshot.jpg" alt="me"/>
      <h3>Sean Pitterson</h3>
      <p>Developer in Philadelphia</p>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Background</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    </div>
    </Fragment>
  )
}

export default Nav;
