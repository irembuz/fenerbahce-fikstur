import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 shadow bg-[#0a1f44] w-full">
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="leading-tight">
              <h1 className="text-white text-lg sm:text-xl font-bold">Fenerbahçe Fikstür</h1>
              <p className="text-xs text-[#f7d100]/90">Maçlar, skorlar ve durumlar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-[#f7d100] via-[#f7d100] to-transparent opacity-90" />
    </header>
  );
};

export default Header;
