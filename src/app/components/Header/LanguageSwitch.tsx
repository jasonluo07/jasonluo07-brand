import type { Dispatch, SetStateAction } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { RiEnglishInput } from 'react-icons/ri';

import type { Language } from './types';

type LanguageSwitchProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

const LanguageSwitch = function ({ language, setLanguage }: LanguageSwitchProps) {
  const isEnglish = language === 'english';

  const handleLanguageToggle = function () {
    setLanguage(isEnglish ? 'chinese' : 'english');
  };

  const Icon = isEnglish ? RiEnglishInput : IoLanguage;

  return (
    <button className="block rounded-xl bg-slate-100 p-2" onClick={handleLanguageToggle}>
      <Icon size={25} color="black" />
    </button>
  );
};

export default LanguageSwitch;
