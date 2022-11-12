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
      className="w-[90%] mx-auto flex items-center justify-between shadow-xl dark:shadow-black/40 p-3"
    >
      <div style={{ color: props.color }}>
        <props.icon className="text-5xl" />
      </div>

      <h2 className="text-sm tracking-widest font-semibold">
        {props.title}
      </h2>
    </motion.div>
  );
};

export default SkillCard;
