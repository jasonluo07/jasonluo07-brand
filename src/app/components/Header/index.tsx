'use client';

import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useTheme } from 'next-themes';

import Link from 'next/link';
import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';

import type { Language, Theme } from './types';
import { useMediaQuery } from '@/hooks';

interface NavLink {
  label: string;
  href: string;
}

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
  const { theme = 'light', setTheme } = useTheme() as {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
  };
  const [language, setLanguage] = useState<Language>('english');
  const [showMenu, setShowMenu] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const handleMenuToggle = function () {
    if (!isLargeScreen) {
      setShowMenu(!showMenu);
    }
  };

  useEffect(() => {
    if (isLargeScreen) {
      setShowMenu(false);
    }
  }, [isLargeScreen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white px-4 py-3 shadow dark:bg-black sm:px-20">
      <div className="flex justify-between">
        <Link href="#home">
          <h2 className="text-2xl font-bold leading-loose">Jason Luo</h2>
        </Link>
        <div className="md:hidden">
          <button className="rounded-md border border-transparent p-2 focus:border-gray-400" onClick={handleMenuToggle}>
            {showMenu ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:space-x-6 ${
            showMenu
              ? 'absolute inset-x-0 top-[72px] z-50 block space-y-6 bg-white px-4 py-3 shadow dark:bg-black sm:px-20'
              : 'hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link className="block" href={link.href} key={link.label} onClick={handleMenuToggle}>
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
