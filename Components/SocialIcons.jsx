import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGit,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialIcons = (props) => {
  return (
    <div
      className={`${props.className} w-full mx-auto flex items-center justify-between text-lg text-red-600`}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 500 }}
        style={{ padding: `${props.padding}px` }}
        className="cursor-pointer shadow-xl rounded-full dark:bg-gray-300"
      >
        <FaFacebook />
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 500 }}
        style={{ padding: `${props.padding}px` }}
        className="cursor-pointer shadow-xl rounded-full dark:bg-gray-300"
      >
        <FaInstagram />
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 500 }}
        style={{ padding: `${props.padding}px` }}
        className="cursor-pointer shadow-xl rounded-full dark:bg-gray-300"
      >
        <FaLinkedin />
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 500 }}
        style={{ padding: `${props.padding}px` }}
        className="cursor-pointer shadow-xl rounded-full dark:bg-gray-300"
      >
        <FaGit />
      </motion.div>
    </div>
  );
};

export default SocialIcons;
