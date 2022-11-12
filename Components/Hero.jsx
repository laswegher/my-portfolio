import React from 'react';
import SocialIcons from './SocialIcons';

const Hero = () => {
  return (
    <div className="shadow-md dark:shadow-black/40 w-full h-screen flex items-center justify-center px-5">
      <div className="max-w-[1200px] mx-auto text-center text-[#444] ">
        <p className="uppercase mb-2 dark:text-gray-400 text-[#666] text-sm font-semibold tracking-widest">
          Let`s build something together
        </p>
        <h1 className="duration-300 ease-in mt-6 mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white">
          Hi, I`m <span className="text-red-600">Ufuk</span>
          <span className="block">A Front-End Web Developer</span>
        </h1>
        <p className="max-w-[700px] mx-auto mt-4 mb-6 dark:text-gray-300 text-[#666] text-[13px] sm:text-[15px] tracking-widest leading-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Temporibus exercitationem nesciunt, magni quas, est fugit
          ipsam tenetur, reiciendis cupiditate in expedita nobis
          consequatur asperiores praesentium ducimus sit soluta?
        </p>
        <div className="max-w-[80%] sm:max-w-[50%]  mx-auto">
          <SocialIcons
            padding={15}
            className="sm:text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
