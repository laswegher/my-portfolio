import Image from 'next/image';
import React from 'react';
import { IoIosSend } from 'react-icons/io';
import ufuktekin from '../public/ufuktekin2.jpg';
import Button from './Button';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      id="about"
      className="CenterComponent"
    >
      <h1 className="SectionTitle text-3xl md:text-6xl">About me</h1>

      {/* Card */}
      <div className=" shadow-2xl dark:shadow-black/90 rounded-xl p-8 max-w-[900px] h-full">
        <div className="flex flex-col text-center md:text-start md:flex-row items-center gap-10 h-full">
          <Image
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] object-cover rounded-full"
            src={ufuktekin}
            alt="ufuk tekin profile"
            priority
          />
          <div className=" h-full">
            <h1 className="text-4xl mb-5">Hi,I`m Ufuk Tekin.</h1>
            <h2 className="text-2xl mb-3">Frontend Developer</h2>
            <p className="tracking-wider leading-6">
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
