'use client';

import React, { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true); // Ensure we only render after theme is set on client
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
