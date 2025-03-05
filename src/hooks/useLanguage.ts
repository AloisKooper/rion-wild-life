import { useContext } from 'react';
import { LanguageContext, Language } from '../contexts/LanguageContext';

// Custom hook for easier access to language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};

// Helper function to get nested translations by key path
export const getTranslation = (translations: any, path: string, defaultValue: string = '') => {
  const keys = path.split('.');
  let result = translations;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result || defaultValue;
}; 