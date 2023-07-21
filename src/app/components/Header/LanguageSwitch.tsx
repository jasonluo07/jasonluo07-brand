import type { Dispatch, SetStateAction } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { RiEnglishInput } from 'react-icons/ri';

import type { Language } from './types';

type LanguageSwitchProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  handleMenuToggle: () => void;
};

const LanguageSwitch = function ({ language, setLanguage, handleMenuToggle }: LanguageSwitchProps) {
  const isEnglish = language === 'english';

  const handleLanguageToggle = function () {
    setLanguage(isEnglish ? 'chinese' : 'english');
  };

  const handleClick = function (_event: React.MouseEvent) {
    handleLanguageToggle();
    handleMenuToggle();
  };

  const Icon = isEnglish ? RiEnglishInput : IoLanguage;

  return (
    <button className="block rounded-xl bg-slate-100 p-2" onClick={handleClick}>
      <Icon size={25} color="black" />
    </button>
  );
};

export default LanguageSwitch;
