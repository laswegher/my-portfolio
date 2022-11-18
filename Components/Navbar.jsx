import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { BsLightbulbFill, BsLightbulb } from 'react-icons/bs';
import SocialIcons from './SocialIcons';
import { motion } from 'framer-motion';

const Navbar = () => {
  //Mobile nav state
  const [mobileNav, setMobileNav] = useState(false);

  // Header Scroll Shadow
  const [headerShadow, setHeaderShadow] = useState(false);

  //Dark mode setup
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //To handle Error for darkmode
  //Scroll header shadow
  useEffect(() => {
    setMounted(true);

    //Scroll Trigger
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    });
  }, []);

  //To handle Error for darkmode
  if (!mounted) return null;

  //Toggling mobile nav from bar icon to close icon
  const handleToggle = () => {
    setMobileNav((prevState) => !prevState);
  };

  return (
    // Header
    <div
      style={{
        boxShadow: headerShadow
          ? ' 0 0 20px rgba(0,0,0,0.7)'
          : ' 0 0 20px rgba(0,0,0,0)',
      }}
      className="z-50 fixed inset-0 FCenter h-16  bg-white dark:bg-[#121212]"
    >
      {/* Header Container*/}
      <div className="Container FBetween gap-10">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/">
            <h1 className="cursor-pointer text-4xl font-extrabold text-red-600 dark:text-white">
              UT
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-10 text-[14px] font-semibold tracking-wider dark:text-white">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, color: 'rgb(255,0,0)' }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
          >
            <Link href="/">
              <li>HOME</li>
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, color: 'rgb(255,0,0)' }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
          >
            <Link href="/#about">
              <li>ABOUT</li>
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, color: 'rgb(255,0,0)' }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
          >
            <Link href="/#skills">
              <li>SKILLS</li>
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, color: 'rgb(255,0,0)' }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
          >
            <Link href="/#projects">
              <li>PROJECTS</li>
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, color: 'rgb(255,0,0)' }}
            transition={{
              type: 'spring',
              stiffness: 400,
            }}
          >
            <Link href="/#contact">
              <li>CONTACT</li>
            </Link>
          </motion.div>
        </ul>

        {/* Dark and Light Icons */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
          }}
          className="dark:text-white cursor-pointer"
        >
          {theme === 'light' ? (
            <div onClick={() => setTheme('dark')}>
              <BsLightbulbFill size={25} />
            </div>
          ) : (
            <div onClick={() => setTheme('light')}>
              <BsLightbulb size={25} />
            </div>
          )}
        </motion.div>

        {/* Mobile Menu Icon */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, color: 'rgb(255,0,0)' }}
          transition={{
            type: 'spring',
            stiffness: 400,
          }}
          onClick={handleToggle}
          className="block md:hidden cursor-pointer  dark:text-white p-2"
        >
          <AiOutlineBars size={25} />
        </motion.div>

        {/* Mobile Navigation */}
        <div
          className={`${
            mobileNav
              ? 'absolute w-full h-screen top-0 left-0 bottom-0 right-0 py-5 px-10 bg-white dark:bg-[#111] duration-300 ease-in'
              : 'absolute w-full h-screen top-0 bottom-0 right-0 py-5 px-10 bg-white dark:bg-[#111] duration-300 ease-in left-[-100%]'
          }`}
        >
          {/* Mobile Navigation Close Icon */}
          <div
            onClick={handleToggle}
            className=" flex items-center justify-between dark:text-white"
          >
            <Link href="/">
              <h1 className="cursor-pointer text-4xl font-extrabold text-red-600">
                UT
              </h1>
            </Link>
            <div className="cursor-pointer hover:scale-110 hover:text-red-600 duration-300 ease-in p-2">
              <AiOutlineClose size={25} />
            </div>
          </div>

          {/* Mobile Navigation */}
          <ul
            onClick={handleToggle}
            className="w-full h-screen flex items-center mb-[-80px]  mt-[-92px] justify-center text-3xl "
          >
            <div className="flex flex-col dark:text-white">
              <Link href="/">
                <li className="p-5 border-b-2 border-red-600 cursor-pointer hover:text-red-600 hover:scale-105 duration-300 ease-in">
                  HOME
                </li>
              </Link>
              <Link href="/#about">
                <li className="p-5 border-b-2 border-red-600  cursor-pointer hover:text-red-600 hover:scale-105 duration-300 ease-in">
                  ABOUT
                </li>
              </Link>
              <Link href="/#skills">
                <li className="p-5 border-b-2 border-red-600 cursor-pointer hover:text-red-600 hover:scale-105 duration-300 ease-in">
                  SKILLS
                </li>
              </Link>
              <Link href="/#projects">
                <li className="p-5 border-b-2 border-red-600 cursor-pointer hover:text-red-600 hover:scale-105 duration-300 ease-in">
                  PROJECTS
                </li>
              </Link>
              <Link href="/#contact">
                <li className="p-5 border-b-2 border-red-600 cursor-pointer hover:text-red-600 hover:scale-105 duration-300 ease-in">
                  CONTACT
                </li>
              </Link>
            </div>
          </ul>

          {/* Social Icons */}
          <div className="max-w-[90%] mx-auto">
            <h1 className="text-sm font-semibold tracking-widest dark:text-white mb-3">
              Let`s Connect
            </h1>
            <SocialIcons padding="10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
