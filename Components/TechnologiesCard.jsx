import React from 'react';
import Button from './Button';
import Link from 'next/link';
import ButtonViewAll from './ButtonViewAll';

const TechnologiesCard = ({ tec, codeLink, demoLink }) => {
  return (
    <div className="flex-1 max-w-max flex flex-col items-center">
      <h4 className="  tracking-wider border-b max-w-max pb-1 mb-5 border-b-red-500">
        Technologies
      </h4>

      <div className="flex flex-col gap-4 h-full items-center  ">
        <div className="w-full md:max-w-[240px] flex flex-wrap items-center gap-2 sm:gap-4">
          {tec.map((el, i) => {
            return (
              <div
                className={`flex-${
                  i % 2
                } border rounded-xl text-xs font-bold uppercase text-center tracking-widest p-2`}
                key={i}
              >
                {el}
              </div>
            );
          })}
        </div>

        <div className="FCenter gap-3 flex-row">
          <Link
            href={codeLink}
            target="_blank"
          >
            <Button className="flex-1">Code</Button>
          </Link>
          <Link
            href={demoLink}
            target="_blank"
          >
            <Button className="flex-1">Demo</Button>
          </Link>

          <ButtonViewAll />
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
