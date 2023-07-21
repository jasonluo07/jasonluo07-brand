'use client';

import { ThemeProvider } from 'next-themes';
import { type ReactNode, useEffect, useState } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = function ({ children }: ProvidersProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Why? https://nextjs.org/docs/messages/react-hydration-error
  if (isClient) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
  }
};

export default Providers;
