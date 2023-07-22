import { SectionTitle } from '@/components/ui';

import ProjectList from './ProjectList';

type PortfolioSectionProps = {
  appendClass?: string;
};

const PortfolioSection = function ({ appendClass }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className={`${appendClass}`}>
      <SectionTitle to="portfolio">Portfolio</SectionTitle>
      <ProjectList />
    </section>
  );
};

export default PortfolioSection;
