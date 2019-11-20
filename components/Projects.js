import React, {Fragment} from 'react';

function Projects(props){
  return(
    <Fragment>
    <div className="container" id="projects">
    {
      props.projects.map((project, i) => (
        <div className='proj'>
        <h2>{project.name}</h2>
        <img src={project.img}/>
        <p> {project.description}</p>
        <button> {project.link} </button>
        </div>
      ))
    }

    </div>
    </Fragment>
  )
}

export default Projects;
