import React, {Fragment} from 'react';

function Projects(props){
  return(
    <Fragment>
    <div className="container" id="projects">
    <div className="text-box">
    <h1>My Projects</h1>
        <h5>My Resume</h5>
        <div className='content'>
    {
      props.projects.map((project, i) => (
        <div className='proj'>
        <h2>{project.name}</h2>
        <img src={project.img}/>
        <p> {project.description}</p>
        <button className='btn btn-primary btn-send-message'> <p><a href={project.link}>Check it out here</a></p> </button>
        </div>
      ))
    }
    </div>
  </div>
    </div>
    </Fragment>
  )
}

export default Projects;
