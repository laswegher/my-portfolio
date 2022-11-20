import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import project_data from '../Data/projects_data';
import ProjectSliderCard from './ProjectSliderCard';
import ButtonViewAll from './ButtonViewAll';

const projetcs = project_data.reverse();

const ProjectSlider = () => {
  const [rightWidth, setRightWidth] = useState(0);
  const caurosel = useRef();

  useEffect(() => {
    setRightWidth(
      caurosel.current.scrollWidth - caurosel.current.offsetWidth
    );
  }, []);

  return (
    <div
      id="projects"
      className="CenterComponent FCenter flex-col shadow-md dark:shadow-black/40  px-5"
    >
      <div className="relative w-full max-w-[1000px] flex flex-col items-start justify-center sm:items-center">
        <h3 className="SectionTitle">
          Projects{' '}
          <span className="text-xs font-bold tracking-widest uppercase">
            #latest
          </span>
        </h3>
        {/* View All Button */}
        <div className="absolute top-5 right-0">
          <ButtonViewAll className="text-xs" />
        </div>
      </div>

      {/* Caurosel outer div */}
      <motion.div
        ref={caurosel}
        id="asd"
        initial={false}
        className="w-full max-w-[1000px] px-6 py-3 overflow-hidden shadow-xl dark:shadow-black/40"
      >
        {/* Caurosel inner div */}
        <motion.div
          initial={false}
          drag="x"
          dragConstraints={{ right: 0, left: -rightWidth }}
          className="w-full h-full flex gap-4 "
        >
          {/* Project Slider Cards */}
          {projetcs.map((project) => {
            return (
              <div key={project.id}>
                <ProjectSliderCard {...project} />
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
