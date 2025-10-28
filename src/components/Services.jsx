import React, { useState } from 'react';
import { services } from '../data/siteData';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

function Services() {
  const [vehicleType, setVehicleType] = useState('cars'); // 'cars' or 'trucks'
  const [planType, setPlanType] = useState('exterior'); // 'exterior', 'interior', or 'ultimate'

  // Get the currently selected plan based on state
  const selectedPlan = services[vehicleType][planType];

  // Styles for toggle buttons
  const vehicleButtonStyles = "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none flex-1";
  const planButtonStyles = "py-2 px-5 rounded-lg font-semibold transition duration-300 focus:outline-none";
  const activeButtonStyles = "bg-cyan-500 text-white shadow-md";
  const inactiveButtonStyles = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-800"> {/* Added padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Washing Price"
          subtitle="Choose Your Plan"
        />

        {/* Vehicle Type Toggle */}
        <div className="flex justify-center mb-8 bg-gray-900 rounded-full p-1 max-w-xs mx-auto shadow-inner">
          <button
            onClick={() => setVehicleType('cars')}
            className={`${vehicleButtonStyles} ${vehicleType === 'cars' ? activeButtonStyles : inactiveButtonStyles}`}
            aria-pressed={vehicleType === 'cars'}
          >
            Cars
          </button>
          <button
            onClick={() => setVehicleType('trucks')}
            className={`${vehicleButtonStyles} ${vehicleType === 'trucks' ? activeButtonStyles : inactiveButtonStyles}`}
            aria-pressed={vehicleType === 'trucks'}
          >
            Trucks & SUVs
          </button>
        </div>

        {/* Plan Type Toggle */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
           <button
             onClick={() => setPlanType('exterior')}
             className={`${planButtonStyles} ${planType === 'exterior' ? activeButtonStyles : inactiveButtonStyles}`}
             aria-pressed={planType === 'exterior'}
           >
             Exterior
           </button>
           <button
             onClick={() => setPlanType('interior')}
             className={`${planButtonStyles} ${planType === 'interior' ? activeButtonStyles : inactiveButtonStyles}`}
             aria-pressed={planType === 'interior'}
           >
             Interior
           </button>
           <button
             onClick={() => setPlanType('ultimate')}
             className={`${planButtonStyles} ${planType === 'ultimate' ? activeButtonStyles : inactiveButtonStyles}`}
             aria-pressed={planType === 'ultimate'}
           >
             Ultimate (Both)
           </button>
        </div>

        {/* Pricing Card - Centered */}
        <div className="max-w-md mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-cyan-400 mb-2 text-center sm:text-left">
                  {selectedPlan.name}
                </h3>
                 {/* Price */}
                <p className="text-5xl font-extrabold text-white mb-6 text-center sm:text-left">
                    ${selectedPlan.price}
                    <span className="text-lg font-medium text-gray-400 align-baseline"> /one-time</span>
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                    {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                           {/* Check icon */}
                           <Icon name="CheckCircle" className="flex-shrink-0 h-6 w-6 text-cyan-400 mr-3" />
                           <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Booking Button */}
                <a href="#contact" // Link this appropriately later
                   className="w-full text-center block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                    Book This Plan
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
