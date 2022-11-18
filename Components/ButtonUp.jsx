import Link from 'next/link';
import React from 'react';
import { ImArrowUp2 } from 'react-icons/im';
import { motion } from 'framer-motion';

const ButtonUp = ({ link }) => {
  return (
    <Link href={link}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500 }}
        className="fixed bottom-10 right-10 rounded-full shadow-2xl"
      >
        <ImArrowUp2 className="text-4xl p-2 bg-[#121212] text-white dark:bg-white rounded-full dark:text-black font-medium " />
      </motion.div>
    </Link>
  );
};

export default ButtonUp;
