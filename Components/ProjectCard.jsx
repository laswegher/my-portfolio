import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="text-sm md:text-xl tracking-widest font-semibold">
        {props.title}
      </h1>

      <Image
        className="min-w-[300px] h-full mb-6 mt-4 object-cover hover:cursor-grab rounded-lg active:cursor-grabbing"
        draggable="false"
        src={props.image}
        alt={props.title}
        priority
      />

      <Link href={{ pathname: 'view', query: { id: `${props.id}` } }}>
        <Button onClick={() => console.log(props.id)}>
          Take a Look
        </Button>
      </Link>
    </div>
  );
};

export default ProjectCard;
