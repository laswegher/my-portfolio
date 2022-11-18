import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import project_data from '../Data/projects_data';
import ProjectSliderCard from './ProjectSliderCard';
import Link from 'next/link';

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
      <div className="relative w-full max-w-[1000px] FCenter">
        <h3 className="SectionTitle">Projects</h3>

        {/* View All Button */}
        <Link
          className="absolute top-4 right-0"
          href="/projects"
        >
          <motion.p
            className="border border-red-600 px-2 py-1 rounded-md text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 600 }}
          >
            View All
          </motion.p>
        </Link>
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
          {project_data.map((el) => {
            return (
              <div key={el.id}>
                <ProjectSliderCard {...el} />
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
