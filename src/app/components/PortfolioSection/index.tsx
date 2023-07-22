import { HiArrowUp } from 'react-icons/hi';

import { ScrollLink, TealDivider } from '@/components/ui';

import ProjectList from './ProjectList';

type PortfolioSectionProps = {
  appendClass?: string;
};

const PortfolioSection = function ({ appendClass }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className={`${appendClass}`}>
      <h2 className="text-center text-4xl font-bold">Portfolio</h2>
      <TealDivider />
      <ProjectList />
      <ScrollLink to="hero" className="mb-[-20px] mt-6 block md:mt-10">
        <HiArrowUp size={35} className="mx-auto animate-bounce" />
      </ScrollLink>
    </section>
  );
};

export default PortfolioSection;
