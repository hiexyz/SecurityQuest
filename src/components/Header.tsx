import React from 'react';
import { Shield, HelpCircle, Home } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">セキュリティクエスト</span>
          </div>
          
          <nav className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-lg">
              <Home className="w-6 h-6 mr-1" />
              <span>ホーム</span>
            </button>
            <button className="flex items-center px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="w-6 h-6 mr-1" />
              <span>ヘルプ</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;