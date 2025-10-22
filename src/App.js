import React from 'react';
import Header from './components/Header';
import DeckGrid from './components/DeckGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <DeckGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;