import React, {Fragment} from 'react';

function Experience(){
  return(
    <Fragment>
    <div className="container" id="resume">
      <div className="text-box">
        <h1>My Experience</h1>
        <h5>My Resume</h5>
        <div className="row">
        <div className="col-sm-12 one">
          <div className="rect">
            <h3>Mediacom</h3>
            <h4>Summer 2015 - Summer 2017</h4>
            <h4>Network Security Intern</h4>
          </div>
        </div>
      </div>
        <div className="row">
        <div className="col-sm-12 two">
          <div className="rect">
            <h3>Wizehive</h3>
            <h4>Fall 2017 - Today</h4>
            <h4>Implementation and Technical Support Specialist</h4>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12 three">
          <div className="rect">
            <h3>Gregory</h3>
            <h4>Summer 2018 - Today</h4>
            <h4>Software Engineer</h4>
          </div>
        </div>
      </div>

          </div>

      </div>
    </Fragment>
  )
}

export default Experience;
