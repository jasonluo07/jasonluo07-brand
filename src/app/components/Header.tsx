'use client';

import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { RiMoonFill, RiSunLine, RiEnglishInput } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { IoLanguage } from 'react-icons/io5';
import useMediaQuery from '@/hooks/useMediaQuery';

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
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeSwitch = function ({ theme, setTheme }: ThemeSwitchProps) {
  const isLight = theme === 'light';

  const handleThemeToggle = function () {
    setTheme(isLight ? 'dark' : 'light');
  };

  return (
    <button className="bg-slate-100 p-2 rounded-xl block" onClick={handleThemeToggle}>
      {isLight ? <RiMoonFill size={25} /> : <RiSunLine size={25} />}
    </button>
  );
};

type LanguageSwitchProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

const LanguageSwitch = function ({ language, setLanguage }: LanguageSwitchProps) {
  const isEnglish = language === 'english';

  const handleLanguageToggle = function () {
    setLanguage(isEnglish ? 'chinese' : 'english');
  };

  return (
    <button className="bg-slate-100 p-2 rounded-xl block" onClick={handleLanguageToggle}>
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
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (isLargeScreen) {
      setShowMenu(false);
    }
  }, [isLargeScreen]);

  return (
    <header className="fixed top-0 inset-x-0 px-4 sm:px-20 py-3 shadow bg-white">
      <div className="flex justify-between">
        <Link href="#home">
          <h2 className="text-2xl font-bold leading-[46px]">Jason Luo</h2>
        </Link>
        <div className="md:hidden">
          <button className="p-2 border border-transparent focus:border-gray-400" onClick={handleMenuToggle}>
            {showMenu ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        <div
          className={`md:flex md:space-x-6 md:items-center ${
            showMenu
              ? 'block absolute top-[70px] inset-x-0 space-y-6 bg-white px-4 sm:px-20 shadow pt-[32px] pb-[12px]'
              : 'hidden'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link className="block text-neutral-900" href={link.href} key={link.label}>
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
