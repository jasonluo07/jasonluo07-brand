'use client';

import { useEffect, type ReactNode, useState } from 'react';
import { ThemeProvider } from 'next-themes';

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
