'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from './translations';

export type { Language };

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['EN', 'FR', 'SV'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const value: I18nContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return context;
}
