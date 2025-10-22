import React from 'react';

const DeckCard = ({ name, winrate, games, rank }) => {
  const getWinrateColor = (rate) => {
    const numRate = parseFloat(rate);
    if (numRate >= 65) return 'bg-green-600';
    if (numRate >= 60) return 'bg-yellow-600';
    if (numRate >= 55) return 'bg-orange-600';
    return 'bg-red-600';
  };

  return (
    <div className="deck-list-item">
      <div className="flex items-center space-x-2 flex-1">
        <span className="text-gray-400 text-xs w-4">{rank}</span>
        <div className="w-6 h-4 bg-gray-600 rounded-sm flex-shrink-0"></div>
        <span className="text-white text-xs truncate">{name}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`winrate-badge ${getWinrateColor(winrate)} text-white`}>
          {winrate}
        </span>
        <span className="text-gray-400 text-xs">{games}</span>
      </div>
    </div>
  );
};

export default DeckCard;