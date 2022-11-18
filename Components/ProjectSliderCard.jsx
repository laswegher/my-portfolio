import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

const ProjectSliderCard = (props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="text-sm md:text-xl tracking-widest font-semibold">
        {props.title}
      </h1>

      <div className="max-w-[400px] h-[200px] md:h-[300px]">
        <Image
          className="max-w-[400px] h-full mb-6 mt-4 object-cover hover:cursor-grab rounded-lg active:cursor-grabbing"
          draggable="false"
          src={props.image}
          alt={props.title}
          priority
        />
      </div>

      <Link
        className="mt-8"
        href={{ pathname: 'view', query: { id: `${props.id}` } }}
      >
        <Button>Take a Look</Button>
      </Link>
    </div>
  );
};

export default ProjectSliderCard;
