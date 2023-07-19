import Image from 'next/image';
import Link from 'next/link';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = function () {
  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-73px)] flex-col items-center justify-center px-4 text-center md:flex-row md:text-left"
    >
      <div className="md:w-1/2">
        <Image src="/headshot.jpeg" width={325} height={325} className="rounded-full shadow-2xl" alt="headshot" />
      </div>
      <div className="ml-4 mt-6 md:mt-0 md:w-3/5">
        <h1 className="text-4xl font-bold md:text-7xl">Hi, I&#39;m Jason!</h1>
        <p className="mb-6 mt-4 text-lg md:text-2xl">
          I&#39;m a <span className="font-semibold text-teal-600">Fullstack Engineer</span> based in Taipei, Taiwan.
          Working towards creating software that makes life easier and more meaningful.
        </p>
        <Link
          href="#portfolio"
          className="inline-block rounded bg-teal-600 px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-teal-700"
        >
          Portfolio
        </Link>
      </div>
      <Link href="#about" className="absolute bottom-[5vh] md:bottom-[10vh]">
        <HiArrowDown size={35} className="animate-bounce" />
      </Link>
    </section>
  );
};

export default HeroSection;
