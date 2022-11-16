import React from 'react';
import { useRouter } from 'next/router';
import project_data from '../Data/projects_data';
import Image from 'next/image';
import TechnologiesCard from '../Components/TechnologiesCard';

const View = () => {
  const router = useRouter();
  const { id } = router.query;
  const selectedProject = project_data.filter((el) => {
    return el.id === Number(id);
  });
  return (
    <div className="CenterComponent md:mt-0 mt-10">
      <div className="Container pt-14  ">
        {selectedProject.map((el) => {
          return (
            <div key={el.id}>
              <h1 className="text-2xl">{el.title}</h1>
              <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-between">
                <div className="flex-1 w-full">
                  <Image
                    className="w-full h-[500px] mt-6 rounded-xl object-cover"
                    alt={el.title}
                    src={el.image}
                    priority
                  />
                </div>
                <TechnologiesCard
                  tec={el.technologies}
                  demoLink={el.demoLink}
                  codeLink={el.codeLink}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default View;
