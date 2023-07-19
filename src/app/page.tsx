import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';

const Home = function () {
  return (
    <main className="mx-auto max-w-3xl md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
    </main>
  );
};

export default Home;
