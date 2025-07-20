import React from 'react';
import { type ReactNode } from 'react';
import { ThemeProvider } from './theme-context';
import { NextIntlClientProvider } from 'next-intl';

export function RootProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      enableColorScheme={false} // Prevents color scheme mismatches
    >
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </ThemeProvider>
  );
}
