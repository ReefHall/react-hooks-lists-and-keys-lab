import React from "react";

function ProjectItem({ name, about, technologies }) {
  const names = technologies.map(name => {
   return <span key ={name}>{name}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {names}
      </div>
    </div>
  );
}

export default ProjectItem;
