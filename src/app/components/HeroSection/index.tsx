import Image from 'next/image';
import { HiArrowDown } from 'react-icons/hi';
import { RxArrowDown } from 'react-icons/rx';

import { ScrollLink } from '@/components/ui';

import TypeWriter from './TypeWriter';

type HeroSectionProps = {
  appendClass?: string;
};

type Hat = {
  article: string;
  title: string;
};

const HATS: Hat[] = [
  {
    article: 'a',
    title: 'Backend Developer',
  },
  {
    article: 'a',
    title: 'Frontend Developer',
  },
  {
    article: 'a',
    title: 'Bouldering Lover',
  },
];

const HeroSection = function ({ appendClass }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={`relative mt-[-84px] flex flex-col items-center justify-center text-center md:flex-row md:text-left ${appendClass}`}
    >
      <div className="flex w-2/3 justify-center md:w-1/2">
        <Image
          priority
          src="/Alan_Turing.png"
          width={325}
          height={325}
          className="rounded-full shadow-2xl"
          alt="Alan Turing"
        />
      </div>
      <div className="mt-6 md:ml-4 md:mt-0 md:w-1/2">
        <h1 className="text-4xl font-bold md:text-5xl">Hi, I&#39;m Jason!</h1>
        <TypeWriter appendClass="mt-5" hats={HATS} />
        <p className="mt-3 text-lg md:text-2xl">Committed to crafting amazing web applications.</p>
        <ScrollLink
          to="portfolio"
          className="mt-6 inline-block rounded bg-teal-600 px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-teal-700"
        >
          Portfolio
        </ScrollLink>
      </div>
      <ScrollLink to="about" className="absolute bottom-[4vh]">
        <RxArrowDown size={35} className="animate-bounce" />
      </ScrollLink>
    </section>
  );
};

export default HeroSection;
