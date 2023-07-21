import { HiArrowUp } from 'react-icons/hi';

import { ScrollLink } from '@/components/ui';

import SocialMediaLinks from './SocialMediaLinks';

const Footer = function () {
  return (
    <footer className="relative border-t p-4 sm:px-20 md:flex md:flex-row md:justify-between">
      <div className="mb-2 text-center text-lg text-neutral-500 dark:text-neutral-100 md:mb-0">© 2023 Jason Luo</div>
      <div className="flex flex-row items-center justify-center space-x-3">
        <SocialMediaLinks />
      </div>
      <ScrollLink to="hero" className="absolute left-[50%] top-[-45px] translate-x-[-50%]">
        <HiArrowUp size={35} className="animate-bounce" />
      </ScrollLink>
    </footer>
  );
};

export default Footer;
