import React from 'react';
import project_data from '../Data/projects_data';
import ProjectCars from '../Components/ProjectCard';
import { nanoid } from 'nanoid';

const projects = () => {
  const projectsJSX = project_data.map((project) => {
    return (
      <div
        key={nanoid(10)}
        className="CenterComponent"
      >
        <div className="w-[800px] h-[500px] ">
          <ProjectCars {...project} />
        </div>
      </div>
    );
  });

  return (
    <div className="pt-14">
      <div>{projectsJSX}</div>
    </div>
  );
};

export default projects;
