import React from 'react';
import Image from 'next/image';
import Button from '../Components/Button';
import Link from 'next/link';

const ProjectCard = (props) => {
  return (
    <div className="relative w-full mx-auto max-w-[800px] h-[250px] sm:h-[300px] md:h-[400px] shadow-xl dark:shadow-black/40 group rounded-xl overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="w-full h-full">
        <Image
          priority
          src={props.image}
          alt="/"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Hover Text */}
      <div className="hidden absolute group-hover:bg-black/70 group-hover:flex flex-col items-center justify-center inset-0 px-4 text-white">
        <h4 className="mb-2">{props.title}</h4>
        <Link
          href={{
            pathname: 'view',
            query: { id: `${props.id}` },
          }}
        >
          <Button>Find out</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
