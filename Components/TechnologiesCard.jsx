import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const TechnologiesCard = ({ tec }) => {
  return (
    <div className="flex-1 max-w-max flex flex-col items-center">
      <h1 className="text-2xl  tracking-wider border-b max-w-max pb-1 mb-5 border-b-red-500">
        Technologies
      </h1>

      <div className="flex flex-col gap-10 h-full items-center  ">
        <div className="w-full md:max-w-[240px] flex flex-wrap items-center gap-4">
          {tec.map((el, i) => {
            return (
              <div
                className="flex-1 cursor-pointer  border rounded-xl text-xs font-bold uppercase text-center tracking-widest p-3"
                key={i}
              >
                {el}
              </div>
            );
          })}
        </div>

        <div className="flex gap-5 flex-row">
          <Button className="flex-1">Code</Button>
          <Button className="flex-1">Demo</Button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
