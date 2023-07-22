import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';

const Home = function () {
  return (
    <main className="mx-auto max-w-5xl">
      <HeroSection appendClass="h-[calc(100vh-73px)] p-6" />
      <AboutSection appendClass="p-6" />
      <PortfolioSection appendClass="p-6" />
    </main>
  );
};

export default Home;
