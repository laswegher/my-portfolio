import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = (props) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { type: 'spring', stiffness: 600 },
      }}
      className="w-[90%] mx-auto FBetween shadow-xl dark:shadow-black/40 p-3"
    >
      <div style={{ color: props.color }}>
        <props.icon className="text-5xl" />
      </div>

      <p className="font-bold sm:font-semibold uppercase">
        {props.title}
      </p>
    </motion.div>
  );
};

export default SkillCard;
