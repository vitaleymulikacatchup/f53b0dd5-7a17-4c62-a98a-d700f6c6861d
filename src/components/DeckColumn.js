import React from 'react';
import DeckCard from './DeckCard';

const DeckColumn = ({ title, className, color, decks }) => {
  return (
    <div className="bg-card-bg rounded-lg overflow-hidden">
      <div className={`class-header ${color}`}>
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
      <div className="p-3 space-y-2">
        {decks.map((deck, index) => (
          <DeckCard key={index} {...deck} rank={index + 1} />
        ))}
        <div className="text-center py-2">
          <span className="text-xs text-gray-400">Powered by: Hearthstone Deck Tracker</span>
        </div>
        <button className="w-full bg-green-accent hover:bg-green-600 text-white py-2 px-4 rounded text-sm font-medium transition-colors">
          First Streamed: Menagerie Priest
        </button>
      </div>
    </div>
  );
};

export default DeckColumn;