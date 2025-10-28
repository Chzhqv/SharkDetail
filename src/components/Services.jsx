import React, { useState } from 'react';
import { services } from '../data/siteData';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

function Services() {
  const [vehicleType, setVehicleType] = useState('cars'); // 'cars' or 'trucks'
  const [planType, setPlanType] = useState('exterior'); // 'exterior', 'interior', or 'ultimate'

  const selectedPlan = services[vehicleType][planType];

  const planButtonStyles = "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none";
  const activeButtonStyles = "bg-cyan-500 text-white shadow-md";
  const inactiveButtonStyles = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Washing Price" 
          subtitle="Choose Your Plan" 
        />

        {/* Vehicle Type Toggle */}
        <div className="flex justify-center mb-8 bg-gray-900 rounded-full p-1 max-w-xs mx-auto">
          <button
            onClick={() => setVehicleType('cars')}
            className={`${planButtonStyles} ${vehicleType === 'cars' ? activeButtonStyles : inactiveButtonStyles}`}
          >
            Cars
          </button>
          <button
            onClick={() => setVehicleType('trucks')}
            className={`${planButtonStyles} ${vehicleType === 'trucks' ? activeButtonStyles : inactiveButtonStyles}`}
          >
            Trucks & SUVs
          </button>
        </div>

        {/* Plan Type Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
           <button onClick={() => setPlanType('exterior')} className={`py-2 px-5 rounded-lg font-semibold transition ${planType === 'exterior' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Exterior</button>
           <button onClick={() => setPlanType('interior')} className={`py-2 px-5 rounded-lg font-semibold transition ${planType === 'interior' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Interior</button>
           <button onClick={() => setPlanType('ultimate')} className={`py-2 px-5 rounded-lg font-semibold transition ${planType === 'ultimate' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>Ultimate (Both)</button>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{selectedPlan.name}</h3>
                <p className="text-5xl font-extrabold text-white mb-6">
                    ${selectedPlan.price}
                    <span className="text-lg font-medium text-gray-400">/one-time</span>
                </p>
                
                <ul className="space-y-4 mb-8">
                    {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                           <Icon name="CheckCircle" className="h-6 w-6 text-cyan-400 mr-3" />
                           <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="w-full text-center block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Book This Plan
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

