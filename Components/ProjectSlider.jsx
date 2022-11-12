import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import project_data from '../Data/projects_data';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

const ProjectSlider = () => {
  const [rightWidth, setRightWidth] = useState(0);
  const caurosel = useRef();

  useEffect(() => {
    setRightWidth(
      caurosel.current.scrollWidth - caurosel.current.offsetWidth
    );
  }, []);

  // Projects Data
  const projectJSX = project_data.map((el) => {
    return (
      <div
        key={el.id}
        className="h-[400px]"
      >
        <ProjectCard {...el} />
      </div>
    );
  });

  return (
    <div
      id="projects"
      className="shadow-md dark:shadow-black/40 w-full min-h-screen flex flex-col items-center justify-center px-5"
    >
      <div className="relative w-full max-w-[1000px] flex items-center justify-center">
        <h1 className=" SectionTitle mr-auto text-2xl md:text-4xl ">
          Projects
        </h1>

        <Link
          className="absolute top:0 right-0"
          href="/projects"
        >
          <motion.h1
            className="border border-red-600 px-4 py-1 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 600 }}
          >
            View All
          </motion.h1>
        </Link>
      </div>

      <motion.div
        ref={caurosel}
        id="asd"
        initial={false}
        className="w-full max-w-[1000px] px-6 py-3 overflow-hidden shadow-xl dark:shadow-black/40"
      >
        <motion.div
          initial={false}
          drag="x"
          dragConstraints={{ right: 0, left: -rightWidth }}
          className="w-full flex gap-4 "
        >
          {projectJSX}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
