import { TealDivider } from '@/components/ui';

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
    </section>
  );
};

export default PortfolioSection;
