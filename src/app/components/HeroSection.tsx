import Image from 'next/image';
import { HiArrowDown } from 'react-icons/hi';

import { ScrollLink } from '@/components/ui';

type HeroSectionProps = {
  className?: string;
};

const HeroSection = function ({ className }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={`relative flex flex-col items-center justify-center text-center md:flex-row md:text-left ${className}`}
    >
      <div className="flex w-2/3 justify-center md:w-1/2">
        <Image src="/Alan_Turing.png" width={325} height={325} className="rounded-full shadow-2xl" alt="Alan Turing" />
      </div>
      <div className="mt-6 md:ml-4 md:mt-0 md:w-1/2">
        <h1 className="text-4xl font-bold md:text-7xl">Hi, I&#39;m Jason!</h1>
        <p className="mt-4 text-lg md:text-2xl">
          I&#39;m a <span className="font-semibold text-teal-600">Fullstack Developer</span> located in Taipei, Taiwan.
          Committed to outstanding wonderful web applications.
        </p>
        <ScrollLink
          to="portfolio"
          className="mt-6 inline-block rounded bg-teal-600 px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-teal-700"
        >
          Portfolio
        </ScrollLink>
      </div>
      <ScrollLink to="aboutMe" className="absolute bottom-[2vh] md:bottom-[4vh]">
        <HiArrowDown size={35} className="animate-bounce" />
      </ScrollLink>
    </section>
  );
};

export default HeroSection;
