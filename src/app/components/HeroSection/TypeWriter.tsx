'use client';

import { useEffect, useState } from 'react';

type TypeWriterProps = {
  appendClass?: string;
  hats: {
    article?: string;
    title: string;
  }[];
  prefix?: string;
};

const TypeWriter = function ({ appendClass, hats, prefix }: TypeWriterProps) {
  // Typewriter effect base class
  const typeWriterClass =
    'text-teal-600 font-bold border-b-2 border-b-blue-400 border-r-2 pr-1' +
    'animate-cursor overflow-hidden whitespace-nowrap transition-[width] ease-in-out duration-1000 mr-auto';

  // State of current hat index
  const [currentHat, setCurrentHat] = useState(0);
  // State to toggle word collapse effect
  const [collapseClass, setCollapseClass] = useState('w-0');

  useEffect(() => {
    setTimeout(() => setCollapseClass('w-full'), 100);

    const incrementHat = async () => {
      // Set the width to 0 - transition duration is 1000ms
      setCollapseClass('w-0');
      setTimeout(() => {
        /**
         * After 1100ms, change the displayed text while the div
         * is collapsed by incrementing the index
         */
        setCurrentHat((oldVal) => {
          let hatIndex;
          if (oldVal >= hats.length - 1) {
            hatIndex = 0;
          } else {
            hatIndex = oldVal + 1;
          }

          return hatIndex;
        });
      }, 1100);
      // After 1000ms, set width to 100% - transition duration is 1000ms
      setTimeout(() => {
        setCollapseClass('w-full');
      }, 1000);
    };
    // Interval timer to change text every 4000ms
    const id = setInterval(incrementHat, 4000);

    // Cleanup interval timer
    return () => clearInterval(id);
  }, [hats.length]);

  return (
    <div className={`flex flex-col gap-4 ${appendClass}`}>
      <h2 className="mx-auto flex gap-2 text-2xl font-bold md:ml-0 md:text-3xl">
        <div className="ml-auto shrink-0 whitespace-nowrap">
          I&#39;m {prefix} {hats[currentHat].article && hats[currentHat].article}
        </div>
        <div className={`${typeWriterClass} ${collapseClass}`}>{hats[currentHat].title}</div>
      </h2>
    </div>
  );
};

export default TypeWriter;
