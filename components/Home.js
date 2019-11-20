import React, {Fragment} from 'react';

function Home(){
  return(
    <Fragment>
    <div className="container" id="home">
      <div className="description" >
        <h1>Hey I'm Sean!</h1>
        <p>I make websites, music, and food. If that's not enough to convince you that I'm awesome, then scroll down to learn more.</p>
        <span className="btn btn-primary btn-download"><a href="/Resources/Sean_Pitterson_Resume_2019.pdf" download="Sean\ Pitterson\ Resume.pdf">Download CV</a></span>
      </div>
    </div>
    </Fragment>
  )
}

export default Home;
