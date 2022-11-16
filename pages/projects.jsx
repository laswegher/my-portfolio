import React from 'react';
import project_data from '../Data/projects_data';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Button from '../Components/Button';

const projects = () => {
  const projectsJSX = project_data.map((project) => {
    return (
      <div
        key={nanoid(10)}
        className="CenterComponent"
      >
        <div className="max-w-[800px] h-[500px] shadow-xl dark:shadow-black/40">
          <Image
            src={project.image}
            alt="/"
            className="w-full h-[400px] object-cover mb-5"
          />
          <div className="px-4">
            <h1>{project.title}</h1>
            <Button>Find out</Button>
          </div>
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
