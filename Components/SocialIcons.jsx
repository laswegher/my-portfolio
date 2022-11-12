import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGit,
} from 'react-icons/fa';

const SocialIcons = (props) => {
  return (
    <div
      className={`${props.className} w-full mx-auto flex items-center justify-between text-lg text-red-600`}
    >
      <div
        style={{ padding: `${props.padding}px` }}
        className="cursor-pointer shadow-xl rounded-full hover:scale-110 duration-300 ease-in dark:bg-gray-300"
      >
        <FaFacebook />
      </div>
      <div
        style={{ padding: `${props.padding}px` }}
        className="cursor-pointer shadow-xl rounded-full hover:scale-110 duration-300 ease-in dark:bg-gray-300"
      >
        <FaInstagram />
      </div>
      <div
        style={{ padding: `${props.padding}px` }}
        className="cursor-pointer shadow-xl rounded-full hover:scale-110 duration-300 ease-in dark:bg-gray-300"
      >
        <FaLinkedin />
      </div>
      <div
        style={{ padding: `${props.padding}px` }}
        className="cursor-pointer shadow-xl rounded-full hover:scale-110 duration-300 ease-in dark:bg-gray-300"
      >
        <FaGit />
      </div>
    </div>
  );
};

export default SocialIcons;
