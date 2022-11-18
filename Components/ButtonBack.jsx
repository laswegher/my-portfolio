import React from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ButtonBack = (props) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 500 }}
      className={`${props.className}`}
      type={`${props.type || 'button'}`}
      onClick={props.onClick}
    >
      <Link href="/projects">
        <p className="FCenter gap-2 text-xs font-bold">
          <TiArrowBackOutline size={20} /> Back
        </p>
      </Link>
    </motion.button>
  );
};

export default ButtonBack;
