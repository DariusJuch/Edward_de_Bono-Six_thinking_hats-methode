import React from 'react';
import Hat from '../assets/top-hat.svg'
 
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Hat} alt="Six Thinking Hats Logo" className="h-8 w-auto pl-8" />
          <span className="ml-3 text-lg font-semibold text-gray-900">Six Thinking Hats</span>
        </div>
      </div>
    </header>
  );
};

export default Header;