import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white opacity-50 py-8 mt-16">
      <div className="px-4 sm:px-6 lg:px-[5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <img src="/top-hat.svg" alt="Six Thinking Hats Logo" className="h-6 w-auto mr-2" />
            Six Thinking Hats
          </h3>
          <p className="text-gray-600 mt-2">
            A systematic approach to better thinking and decision making.
          </p>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-8">
        © 2025 Six Thinking Hats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;