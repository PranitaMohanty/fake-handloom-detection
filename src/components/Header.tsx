import React from 'react';
import { Cpu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Cpu className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">Telangana Handloom Authenticator</h1>
      </div>
    </header>
  );
};

export default Header;