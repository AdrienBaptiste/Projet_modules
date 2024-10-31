// components/organisms/NavBar.tsx
import React from 'react';

interface NavBarProps {
  // onSearch: (query: string) => void;
  // onLogin: () => void;
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="flex justify-center items-center p-4 bg-black text-white">
      <h1>Tree Learning</h1>
    </nav>
  );
};

export default NavBar;