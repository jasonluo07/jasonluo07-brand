type PortfolioSectionProps = {
  className?: string;
};

const PortfolioSection = function ({ className }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className={`${className}`}>
      <h2 className="text-center text-4xl font-bold">Portfolio</h2>
      <hr className="mx-auto my-4 h-1 w-6 rounded-lg border-0 bg-teal-500" />
    </section>
  );
};

export default PortfolioSection;
