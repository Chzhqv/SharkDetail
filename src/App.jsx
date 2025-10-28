import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';     // This is our Home section now
import Services from './components/Services'; // This is our Washing Price section

// Import other components if/when you add them back

function App() {
  return (
    // Set base font and colors for the whole app
    <div className="bg-gray-900 text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />      {/* Home Section */}
        <Services />  {/* Washing Price Section */}
        {/* Add other sections back here later */}
      </main>
      {/* Footer can be added back later */}
    </div>
  );
}

export default App;
