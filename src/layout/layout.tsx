import { ReactNode } from 'react';

import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid max-h-screen min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="flex overflow-hidden p-6">{children}</div>
      <Footer />
    </div>
  );
};
