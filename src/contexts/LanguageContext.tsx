import React, { createContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '../translations/en.json';
import deTranslations from '../translations/de.json';

// Define available languages
export type Language = 'en' | 'de';

// Create a type for our translations
type Translations = typeof enTranslations;

// Define the context type
interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
}

// Create the context with a default value
export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  translations: enTranslations,
  setLanguage: () => {},
});

// Props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Try to get language from localStorage or use browser language or default to English
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'de' ? 'de' : 'en';
  };

  const getSavedLanguage = (): Language => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang === 'de' ? 'de' : 'en';
  };

  const [language, setLanguageState] = useState<Language>(
    () => getSavedLanguage() || getBrowserLanguage()
  );

  // Get the translations for the current language
  const getTranslations = (lang: Language): Translations => {
    return lang === 'de' ? deTranslations : enTranslations;
  };

  const [translations, setTranslations] = useState<Translations>(getTranslations(language));

  // Update translations when language changes
  useEffect(() => {
    setTranslations(getTranslations(language));
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Function to change the language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Provide the language context to all children
  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 