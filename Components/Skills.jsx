import Image from 'next/image';
import React from 'react';
import images from '../Data/skill_data';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div
      id="skills"
      className="CenterComponent"
    >
      {/* Title */}
      <h1 className="SectionTitle text-3xl md:text-6xl ">Skills</h1>
      {/* Skill Cards */}
      <div className="max-w-[1200px] w-[95%] mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((el) => (
          <div key={el.id}>
            <SkillCard {...el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
