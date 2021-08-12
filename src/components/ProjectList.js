import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id={projects.id}>{projects.map((proj)=><ProjectItem key={proj.id} name={proj.name} about={proj.about} technologies={proj.technologies}/>)}</div>
    </div>
  );
}

export default ProjectList;
