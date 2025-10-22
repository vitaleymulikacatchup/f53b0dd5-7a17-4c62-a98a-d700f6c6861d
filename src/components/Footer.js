import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darker-bg border-t border-gray-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Donate Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-medium text-sm transition-colors">
            Donate
          </button>
          
          {/* Discord */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <span className="text-indigo-400 font-medium text-sm">Discord</span>
          </div>
          
          {/* Twitch */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <span className="text-purple-400 font-medium text-sm">twitch</span>
          </div>
          
          {/* Patreon */}
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-sm">PATREON</span>
          </div>
          
          {/* Follow Button */}
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm transition-colors">
            × Follow
          </button>
        </div>
        
        {/* Privacy Policy */}
        <div className="text-center mt-4">
          <a href="#" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;