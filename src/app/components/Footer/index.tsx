import SocialMediaLinks from './SocialMediaLinks';

const Footer = function () {
  return (
    <footer className="border-t p-4 sm:px-20 md:flex md:flex-row md:justify-between">
      <div className="mb-2 text-center text-lg md:mb-0">© 2023 Jason Luo</div>
      <div className="flex flex-row items-center justify-center space-x-3">
        <SocialMediaLinks />
      </div>
    </footer>
  );
};

export default Footer;
