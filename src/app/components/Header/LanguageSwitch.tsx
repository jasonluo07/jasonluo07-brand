import { RiEnglishInput } from 'react-icons/ri';
import { IoLanguage } from 'react-icons/io5';

import { Language } from './types';

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

export default LanguageSwitch;
