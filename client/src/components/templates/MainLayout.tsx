// components/templates/MainLayout.tsx
import React, { ReactNode } from 'react';
import NavBar from '../organisms/NavBar';

interface MainLayoutProps {
  children: ReactNode;
 //  onSearch: (query: string) => void;
  onLogin: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, /* onSearch, */ onLogin }) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavBar />  
      <main className="flex justify-between gap-4 bg-gray-100 h-full">
        {children}
      </main>
      <footer className="p-4">
      </footer>
    </div>
  );
};

export default MainLayout;