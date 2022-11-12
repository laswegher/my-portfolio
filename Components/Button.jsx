import React from 'react';
import { motion } from 'framer-motion';

const Button = (props) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 500 }}
      onClick={props.onClick}
      className={`${props.className} max-w-[150px] bg-red-600 text-center text-sm tracking-widest text-white px-3 py-2 rounded-lg`}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
