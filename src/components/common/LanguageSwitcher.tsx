import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Language } from '../../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, translations } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        className={`flex items-center gap-1.5 ${
          language === 'en' 
            ? 'text-[rgba(192,91,42,1)] font-bold' 
            : 'text-[#3D3E48] hover:text-[rgba(192,91,42,0.8)]'
        } transition-colors`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
      >
        <span className="w-5 h-5 flex items-center justify-center overflow-hidden rounded-full border border-gray-200">
          🇬🇧
        </span>
        <span>{translations.languageSwitcher.en}</span>
      </button>
      
      <span className="text-gray-300">|</span>
      
      <button
        className={`flex items-center gap-1.5 ${
          language === 'de' 
            ? 'text-[rgba(192,91,42,1)] font-bold' 
            : 'text-[#3D3E48] hover:text-[rgba(192,91,42,0.8)]'
        } transition-colors`}
        onClick={() => handleLanguageChange('de')}
        aria-label="Switch to German"
      >
        <span className="w-5 h-5 flex items-center justify-center overflow-hidden rounded-full border border-gray-200">
          🇩🇪
        </span>
        <span>{translations.languageSwitcher.de}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher; 