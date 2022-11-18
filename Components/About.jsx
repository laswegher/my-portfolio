import Image from 'next/image';
import React from 'react';
import { IoIosSend } from 'react-icons/io';
import ufuktekin from '../public/assets/my_images/ufuktekin2.jpg';
import Button from './Button';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      id="about"
      className="CenterComponent"
    >
      <h3 className="SectionTitle">About me</h3>

      {/* Card */}
      <div className=" shadow-2xl dark:shadow-black/90 rounded-xl p-4 max-w-[900px] h-full">
        <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-10 h-full">
          <Image
            className="w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] object-cover rounded-full"
            src={ufuktekin}
            alt="ufuk tekin profile"
            priority
          />
          <div className="h-full">
            <h3 className="mb-5">Hi,I`m Ufuk Tekin.</h3>
            <h4 className="mb-3">Frontend Developer</h4>
            <p>
              I`m a mechatronics engineer. I fell in love coding When
              I was in primary school I had an computer lessons. Our
              teacher was teaching to us web programing. Coding for me
              is a like hobby not a work. I love making my thoughts
              real using code
            </p>
            <Button className="mt-5">
              Contact Me{' '}
              <IoIosSend
                className="inline-block"
                size={20}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
