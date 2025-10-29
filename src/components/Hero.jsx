import React from 'react';
import { heroData } from '../data/siteData';
import HeroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* --- MODIFIED OVERLAYS (Added Top Fade) --- */}
      {/* Overlay 1: Gradient fades from solid gray-900 at the bottom up towards transparent */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      {/* Overlay 2: Gradient fades from semi-transparent gray-900 at the top down towards transparent */}
      {/* Adjust from-gray-900/60 opacity (e.g., /60, /70, /80) to control darkness */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-gray-900/60 to-transparent"></div>
      {/* --- END MODIFIED OVERLAYS --- */}

      {/* Content remains centered */}
      <div className="relative z-10 text-center p-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          {heroData.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {heroData.subheadline}
        </p>
        <a
          href="#services"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg py-3 px-10 rounded-lg transition-transform duration-300 hover:scale-105 shadow-xl animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {heroData.ctaButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;

