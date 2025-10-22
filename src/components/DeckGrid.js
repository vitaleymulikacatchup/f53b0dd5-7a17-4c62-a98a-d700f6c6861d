import React from 'react';
import DeckColumn from './DeckColumn';

const DeckGrid = () => {
  const deckColumns = [
    {
      title: 'Menagerie Priest',
      className: 'priest',
      color: 'bg-gray-600',
      decks: [
        { name: 'Burn Elemental', winrate: '64.2%', games: '2.3k' },
        { name: 'Burn Elemental', winrate: '62.1%', games: '1.8k' },
        { name: 'Burn Elemental', winrate: '61.5%', games: '1.2k' },
        { name: 'Burn Elemental', winrate: '60.8%', games: '956' },
        { name: 'Burn Elemental', winrate: '59.2%', games: '743' },
        { name: 'Burn Elemental', winrate: '58.7%', games: '612' }
      ]
    },
    {
      title: 'Ramp Druid',
      className: 'druid',
      color: 'bg-orange-600',
      decks: [
        { name: 'Pure Paladin', winrate: '65.3%', games: '3.1k' },
        { name: 'Pure Paladin', winrate: '63.8%', games: '2.7k' },
        { name: 'Pure Paladin', winrate: '62.4%', games: '2.1k' },
        { name: 'Pure Paladin', winrate: '61.9%', games: '1.8k' },
        { name: 'Pure Paladin', winrate: '60.5%', games: '1.4k' },
        { name: 'Pure Paladin', winrate: '59.8%', games: '1.1k' }
      ]
    },
    {
      title: 'Budget Mage',
      className: 'mage',
      color: 'bg-blue-600',
      decks: [
        { name: 'Spell Mage', winrate: '67.1%', games: '4.2k' },
        { name: 'Spell Mage', winrate: '65.7%', games: '3.8k' },
        { name: 'Spell Mage', winrate: '64.3%', games: '3.2k' },
        { name: 'Spell Mage', winrate: '63.1%', games: '2.9k' },
        { name: 'Spell Mage', winrate: '62.4%', games: '2.5k' },
        { name: 'Spell Mage', winrate: '61.8%', games: '2.1k' }
      ]
    },
    {
      title: 'Pirate DH',
      className: 'demon-hunter',
      color: 'bg-green-600',
      decks: [
        { name: 'Pirate DH', winrate: '68.4%', games: '5.1k' },
        { name: 'Pirate DH', winrate: '66.9%', games: '4.7k' },
        { name: 'Pirate DH', winrate: '65.2%', games: '4.2k' },
        { name: 'Pirate DH', winrate: '64.1%', games: '3.8k' },
        { name: 'Pirate DH', winrate: '63.5%', games: '3.4k' },
        { name: 'Pirate DH', winrate: '62.7%', games: '3.1k' }
      ]
    },
    {
      title: 'Elemental Mage',
      className: 'mage',
      color: 'bg-cyan-600',
      decks: [
        { name: 'Elemental Mage', winrate: '69.2%', games: '6.3k' },
        { name: 'Elemental Mage', winrate: '67.8%', games: '5.9k' },
        { name: 'Elemental Mage', winrate: '66.4%', games: '5.4k' },
        { name: 'Elemental Mage', winrate: '65.1%', games: '4.9k' },
        { name: 'Elemental Mage', winrate: '64.3%', games: '4.5k' },
        { name: 'Elemental Mage', winrate: '63.7%', games: '4.1k' }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {deckColumns.map((column, index) => (
        <DeckColumn key={index} {...column} />
      ))}
    </div>
  );
};

export default DeckGrid;