import React from 'react';
import { useRouter } from 'next/router';
import project_data from '../Data/projects_data';
import Image from 'next/image';
import TechnologiesCard from '../Components/TechnologiesCard';
import ButtonBack from '../Components/ButtonBack';

const View = () => {
  // Taking id from url
  const router = useRouter();
  const { id } = router.query;

  // Filtering Selected Project Data
  const selectedProject = project_data.filter((el) => {
    return el.id === Number(id);
  });
  return (
    <div className="flex items-center justify-center w-full min-h-screen pt-16">
      <div className="Container">
        {selectedProject.map((el) => {
          return (
            <div key={el.id}>
              <h4 className="mb-2">{el.title}</h4>
              <div className="w-full h-full flex flex-col md:flex-row gap-10 sm:gap-4 items-center justify-between">
                <div className="relative flex-1 w-full shadow-xl dark:shadow-black/20">
                  <Image
                    className="w-full h-[38vh] sm:h-[48vh] md:h-[60vh] rounded-xl object-cover"
                    alt={el.title}
                    src={el.image}
                    priority
                  />
                  <div className="absolute right-0 top-[-30px] ">
                    <ButtonBack />
                  </div>
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
