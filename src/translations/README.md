# Multilingual Support for Rion Wildlife Safaris

This directory contains translation files for implementing multilingual support on the Rion Wildlife Safaris website.

## Implementation Overview

The multilingual support system has been set up with the following components:

1. **Translation Files**:
   - `en.json` - English translations
   - `de.json` - German translations

2. **Language Context**:
   - `src/contexts/LanguageContext.tsx` - Provides language state management 

3. **Language Hook**:
   - `src/hooks/useLanguage.ts` - Custom hook for easy access to translations

4. **Language Switcher Component**:
   - `src/components/common/LanguageSwitcher.tsx` - UI component to switch languages

5. **App Integration**:
   - The `LanguageProvider` is integrated in the App.tsx file

## How to Use

### 1. In Any Component

```tsx
import { useLanguage } from "../hooks/useLanguage";

const MyComponent = () => {
  const { translations } = useLanguage();
  
  return (
    <div>
      <h1>{translations.section.title}</h1>
      <p>{translations.section.description}</p>
    </div>
  );
};
```

### 2. Add the Language Switcher

Add the language switcher component to your header/navigation:

```tsx
import LanguageSwitcher from "../components/common/LanguageSwitcher";

const Header = () => {
  return (
    <header>
      <nav>
        {/* Other navigation elements */}
        <LanguageSwitcher />
      </nav>
    </header>
  );
};
```

### 3. Update Translations

When adding new content, make sure to update both translation files:
- `en.json` for English 
- `de.json` for German

## Features

1. **Auto-Detection**: The system automatically detects the user's browser language and sets it if available.
2. **Persistence**: Language preference is saved to localStorage.
3. **Easy Integration**: Simply use the useLanguage hook in any component.

## Next Steps

1. **Add the Language Switcher to the Header**:
   - Add the `<LanguageSwitcher />` component to your navigation bar
   
2. **Convert More Components**:
   - Update all text content in components to use translations
   
3. **Add More Languages** (if needed):
   - Create additional translation files (e.g., `fr.json` for French)
   - Update `LanguageContext.tsx` to include the new language option 