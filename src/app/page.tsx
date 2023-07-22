import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';

const Home = function () {
  return (
    <main className="mx-auto max-w-5xl">
      <HeroSection className="h-[calc(100vh-73px)]  bg-slate-100 px-6" />
      <AboutSection className="bg-slate-300 p-6" />
      <PortfolioSection className="h-screen bg-slate-500 p-6" />
    </main>
  );
};

export default Home;
