'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiMoonFill, RiSunLine, RiEnglishInput } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { IoLanguage } from 'react-icons/io5';

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

type ThemeSwitchProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeSwitch = function ({ theme, setTheme }: ThemeSwitchProps) {
  const isLight = theme === 'light';

  const handleThemeToggle = function () {
    setTheme(isLight ? 'dark' : 'light');
  };

  return (
    <button className="block rounded-xl bg-slate-100 p-2" onClick={handleThemeToggle}>
      {isLight ? <RiMoonFill size={25} /> : <RiSunLine size={25} />}
    </button>
  );
};

type LanguageSwitchProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

const LanguageSwitch = function ({ language, setLanguage }: LanguageSwitchProps) {
  const isEnglish = language === 'english';

  const handleLanguageToggle = function () {
    setLanguage(isEnglish ? 'chinese' : 'english');
  };

  return (
    <button className="block rounded-xl bg-slate-100 p-2" onClick={handleLanguageToggle}>
      {isEnglish ? <RiEnglishInput size={25} /> : <IoLanguage size={25} />}
    </button>
  );
};

type Theme = 'light' | 'dark';
type Language = 'english' | 'chinese';

const Header = function () {
  const [theme, setTheme] = useState<Theme>('light');
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
    <header className="fixed inset-x-0 top-0 bg-white px-4 py-3 shadow sm:px-20">
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
            showMenu ? 'absolute inset-x-0 top-[72px] block space-y-6 bg-white px-4 py-3 shadow sm:px-20' : 'hidden'
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
