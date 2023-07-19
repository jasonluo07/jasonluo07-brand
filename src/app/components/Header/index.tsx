'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import useMediaQuery from '@/hooks/useMediaQuery';

import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';

import { Theme, Language } from './types';
import { useTheme } from 'next-themes';

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
  },
];

const Header = function () {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState<Language>('english');
  const [showMenu, setShowMenu] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const handleMenuToggle = function () {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (isLargeScreen) {
      setShowMenu(false);
    }
  }, [isLargeScreen]);

  return (
    <header className="fixed top-0 inset-x-0 px-4 sm:px-20 py-3 shadow border-b-[1px] z-50 dark:bg-black">
      <div className="flex justify-between">
        <Link href="#home">
          <h2 className="text-2xl font-bold leading-[48px]">Jason Luo</h2>
        </Link>
        <div className="md:hidden">
          <button
            className="p-2 border rounded-md border-transparent  focus:border-gray-400"
            onClick={handleMenuToggle}
          >
            {showMenu ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        <div
          className={`md:flex md:space-x-6 md:items-center ${
            showMenu
              ? 'block absolute top-[73px] inset-x-0 space-y-6 bg-white dark:bg-black px-4 sm:px-20 shadow pt-[32px] pb-[12px] z-50'
              : 'hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link className="block" href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
          <ThemeSwitch theme={theme} setTheme={setTheme} />
          <LanguageSwitch language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
