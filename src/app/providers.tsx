'use client';

import { I18nProvider } from './i18n/I18nContext';
import { ThemeProvider } from './context/ThemeContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        {children}
      </I18nProvider>
    </ThemeProvider>
  );
}
