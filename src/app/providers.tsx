'use client';

import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = function ({ children }: ProvidersProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
