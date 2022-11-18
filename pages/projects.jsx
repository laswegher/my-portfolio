import React from 'react';
import project_data from '../Data/projects_data';
import { nanoid } from 'nanoid';
import ProjectCard from '../Components/ProjectCard';
import ButtonUp from '../Components/ButtonUp';

const projects = () => {
  return (
    <div className="w-full mt-20 FCenter flex-col">
      {/* Page Title */}
      <div className="mb-4">
        <h3 className="SectionTitle">Projects</h3>
      </div>
      {/* Projects Card */}
      <div className="flex flex-col gap-10 sm:gap-16 md:gap-20 mx-4">
        {project_data.map((project) => {
          return (
            <ProjectCard
              key={nanoid(10)}
              {...project}
            />
          );
        })}
      </div>

      <ButtonUp link="/projects" />
    </div>
  );
};

export default projects;
