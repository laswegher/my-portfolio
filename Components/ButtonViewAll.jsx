import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const ButtonViewAll = () => {
  return (
    <Link
      className=""
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
  );
};

export default ButtonViewAll;
