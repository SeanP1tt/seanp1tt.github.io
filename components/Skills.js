import React, {Fragment} from 'react';

function Skills(props){
  return(
    <div className="container" id="home">
    <div className="container" id="skills">
      <div className="skills-box">
        <h1>My Arsenal</h1> <h5>My Skills</h5>
        {
          props.skillSet.map((skill) => (
            <div className="bar">
              <p>{skill.name }</p>
              <div className="progress">
                <div id={skill.id} className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90"
          aria-valuemin="0" aria-valuemax="100" style={{width:skill.value + '%'}}>
          </div>
              </div>
            </div>
          )
          )
        }




          </div>
    </div>
    </div>
  )
}

export default Skills;
