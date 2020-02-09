import React, {Fragment} from 'react';

function Projects(props){
  return(
    <Fragment>
    <div className="container" id="projects">
    <div className="text-box">
    <h1>My Work</h1>
        <h5>Projects</h5>
        <div className='content'>
    {
      props.projects.map((project, i) => (
        <div className='proj'>
        <h2>{project.name}</h2>
        <img src={project.img}/>
        <p> {project.description}</p>
        {project.gh?<a href={project.gh}><i class="fab fa-github"></i></a>:null}
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
