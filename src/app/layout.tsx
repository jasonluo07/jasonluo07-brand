import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import type { ReactNode } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Providers from './providers';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jason Luo',
  description: 'The resume is a Next.js application that showcases my skills and experience as a fullstack developer.',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = function ({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
