import { HiArrowUp } from 'react-icons/hi';

import { ScrollLink } from '@/components/ui';

import ProjectItem from './ProjectItem';

type PortfolioSectionProps = {
  appendClass?: string;
};

const PROJECTS = [
  {
    title: 'Project 1',
    description:
      'This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily tasks efficiently.',
    repoHref: 'https://github.com',
    demoHref: 'https://github.com',
  },
  {
    title: 'Project 2',
    description:
      'This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily tasks efficiently.',
    repoHref: 'https://github.com',
    demoHref: 'https://github.com',
  },
  {
    title: 'Project 3',
    description:
      'This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily tasks efficiently.',
    repoHref: 'https://github.com',
    demoHref: 'https://github.com',
  },
  {
    title: 'Project 4',
    description:
      'This project was built from scratch with technologies such as HTML, CSS, JavaScript, and uses Node.js and MongoDB as the backend. The tool features a simple, user-friendly interface that helps you manage your daily tasks efficiently.',
    repoHref: 'https://github.com',
    demoHref: 'https://github.com',
  },
];

const PortfolioSection = function ({ appendClass }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className={`${appendClass}`}>
      <h2 className="text-center text-4xl font-bold">Portfolio</h2>
      <hr className="mx-auto my-4 h-1 w-6 rounded-lg border-0 bg-teal-500" />
      <div className="space-y-28 md:mt-8">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
      <ScrollLink to="hero" className="mb-[-20px] mt-6 block md:mt-10">
        <HiArrowUp size={35} className="mx-auto animate-bounce" />
      </ScrollLink>
    </section>
  );
};

export default PortfolioSection;
