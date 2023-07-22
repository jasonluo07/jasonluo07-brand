'use client';

import { useTheme } from 'next-themes';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

import { ScrollLink } from '@/components/ui';
import { useMediaQuery } from '@/hooks';

import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';
import type { Language, Theme } from './types';

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  {
    label: 'Home',
    href: 'hero',
  },
  {
    label: 'About',
    href: 'about',
  },
  {
    label: 'Portfolio',
    href: 'portfolio',
  },
  {
    label: 'Location',
    href: 'location',
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

  const MenuIcon = showMenu ? IoMdClose : IoMdMenu;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white px-4 py-3 shadow dark:bg-black sm:px-20 ${
        showMenu && 'dark:border-black'
      }`}
    >
      <div className="flex justify-between">
        <ScrollLink to="hero">
          <h2 className="text-2xl font-bold leading-loose">Jason Luo</h2>
        </ScrollLink>
        <button
          className="block rounded-md border border-transparent p-2 focus:border-gray-400 md:hidden"
          onClick={handleMenuToggle}
        >
          <MenuIcon size={30} />
        </button>
        <div
          className={`md:flex md:items-center md:space-x-6 ${
            showMenu
              ? 'absolute inset-x-0 top-[73px] z-50 block space-y-6 border-b bg-white px-4 py-3 shadow dark:bg-black sm:px-20'
              : 'hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <ScrollLink key={link.label} className="block" to={link.href} onClick={handleMenuToggle}>
              {link.label}
            </ScrollLink>
          ))}
          <ThemeSwitch theme={theme} setTheme={setTheme} />
          <LanguageSwitch language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
