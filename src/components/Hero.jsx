import React from 'react';
import { heroData } from '../data/siteData';
import HeroBg from '../assets/hero-bg.jpg'; // Assuming you still have this image

const Hero = () => {
  return (
    <section
      id="home" // Ensure this matches the nav link href
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          {heroData.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {heroData.subheadline}
        </p>
        {/* Updated button to scroll to services */}
        <a
          href="#services"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg py-3 px-10 rounded-lg transition-transform duration-300 hover:scale-105 shadow-xl animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {heroData.ctaButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;
