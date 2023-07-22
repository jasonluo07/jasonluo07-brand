import Image from 'next/image';
import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';
import { HiArrowUp } from 'react-icons/hi';

import { ScrollLink } from '@/components/ui';

type PortfolioSectionProps = {
  appendClass?: string;
};

const ProjectItem = function () {
  return (
    <div className="md:flex md:gap-x-8">
      <Image
        src="https://fakeimg.pl/720x420/"
        alt="Fake Image"
        width={720}
        height={420}
        sizes="100%"
        className="rounded-xl shadow-xl hover:opacity-70"
      />
      <div className="mt-8 md:mt-0">
        <h3 className="text-3xl font-bold">Project 1</h3>
        <p className="mt-6 text-xl">
          This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and
          MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily
          tasks efficiently.
        </p>
        <div className="mt-4 flex gap-x-4">
          <a href="https://github.com" rel="noopener noreferrer" target="_blank">
            <BsGithub size={30} />
          </a>
          <a href="https://github.com" rel="noopener noreferrer" target="_blank">
            <BsArrowUpRightSquare size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = function ({ appendClass }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className={`${appendClass}`}>
      <h2 className="text-center text-4xl font-bold">Portfolio</h2>
      <hr className="mx-auto my-4 h-1 w-6 rounded-lg border-0 bg-teal-500" />
      <div className="space-y-28 md:mt-8">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <ScrollLink to="hero" className="mb-[-20px] mt-6 block md:mt-10">
        <HiArrowUp size={35} className="mx-auto animate-bounce" />
      </ScrollLink>
    </section>
  );
};

export default PortfolioSection;
