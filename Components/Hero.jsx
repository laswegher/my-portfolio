import React from 'react';
import SocialIcons from './SocialIcons';

const Hero = () => {
  return (
    <div className="CenterComponent shadow-md dark:shadow-black/40">
      <div className="Container text-center">
        <p className="mb-2 uppercase text-sm font-bold ">
          Let`s build something together
        </p>
        <h1 className="my-6 font-bold ">
          Hi, I`m <span className="text-red-600">Ufuk</span>
          <span className="block">A Front-End Web Developer</span>
        </h1>
        <p className="max-w-[700px] mx-auto my-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Temporibus exercitationem nesciunt, magni quas, est fugit
          ipsam tenetur, reiciendis cupiditate in expedita nobis
        </p>

        {/* Social Icon Component */}
        <div className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px] mx-auto">
          <SocialIcons
            padding={15}
            className="text-1xl sm:text-2xl md:text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
