import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Leaderboards', hasDropdown: true },
    { name: 'Decks', hasDropdown: true },
    { name: 'Meta', hasDropdown: true },
    { name: 'Matchups (WIP)', hasDropdown: false },
    { name: 'Streamer Decks', hasDropdown: false },
    { name: 'Esports', hasDropdown: false },
    { name: 'Utilities', hasDropdown: true },
    { name: 'Misc', hasDropdown: true }
  ];

  return (
    <header className="bg-darker-bg border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-accent rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">HS</span>
            </div>
            <span className="text-white font-bold hidden sm:block">HSGuru</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white text-sm transition-colors">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm hidden md:block">No ads & more</span>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold text-sm">PATREON</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button key={index} className="text-left text-gray-300 hover:text-white py-2 text-sm">
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;