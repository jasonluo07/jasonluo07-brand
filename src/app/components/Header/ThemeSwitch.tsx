import type { Dispatch, SetStateAction } from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

import type { Theme } from './types';

type ThemeSwitchProps = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeSwitch = function ({ theme, setTheme }: ThemeSwitchProps) {
  const isLight = theme === 'light';

  const handleThemeToggle = function () {
    setTheme(isLight ? 'dark' : 'light');
  };

  const Icon = isLight ? RiMoonFill : RiSunLine;

  return (
    <button className="block rounded-xl bg-slate-100 p-2" onClick={handleThemeToggle}>
      <Icon size={25} color="black" />
    </button>
  );
};

export default ThemeSwitch;
