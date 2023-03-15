import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects }) {
  console.log(projects);
  const techs = user.projects.map(pro => {
   return <ProjectItem key = {pro.id} name = {pro.name} about = {pro.about} technologies ={pro.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{techs}</div>
    </div>
  );
}

export default ProjectList;
