import { RiMoonFill, RiSunLine } from 'react-icons/ri';

import { Theme } from './types';

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

export default ThemeSwitch;
