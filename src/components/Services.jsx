import React, { useState } from 'react';
import { services } from '../data/siteData';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

import CarPriceImage from '../assets/car-price.jpg';
import TruckPriceImage from '../assets/truck-price.jpg';

function Services() {
  const [vehicleType, setVehicleType] = useState('cars');
  const [planType, setPlanType] = useState('exterior');

  const selectedPlan = services[vehicleType][planType];

  // Styles for Vehicle Type Buttons (Cars, Trucks) - Larger, prominent
  const vehicleButtonBaseStyles = "px-10 py-3 rounded-full font-bold text-lg transition-colors duration-300 focus:outline-none flex items-center justify-center space-x-2";
  const vehicleActiveStyles = "bg-primary-500 text-white shadow-lg";
  const vehicleInactiveStyles = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  // Styles for Plan Type Buttons (Exterior, Interior, Ultimate) - Smaller
  const planButtonBaseStyles = "py-2 px-5 rounded-lg font-semibold transition";
  const planActiveStyles = "bg-primary-500 text-white";
  const planInactiveStyles = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  const currentImage = vehicleType === 'cars' ? CarPriceImage : TruckPriceImage;
  const currentVehicleTitle = vehicleType === 'cars' ? 'Cars Detail Prices' : 'Trucks Detail Prices';


  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Title --- */}
        <SectionTitle
          title="WASHING PRICE"
          titleClassName="text-primary-500 uppercase text-2xl md:text-3xl font-semibold tracking-wider"
          subtitle="Choose Your Plan"
          subtitleClassName="text-white text-4xl md:text-5xl font-bold mt-2"
        />

        {/* --- Vehicle Type Buttons (Moved outside grid, below title) --- */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
            <button
                onClick={() => setVehicleType('cars')}
                className={`${vehicleButtonBaseStyles} ${vehicleType === 'cars' ? vehicleActiveStyles : vehicleInactiveStyles}`}
            >
                <Icon name="Car" className="h-6 w-6" />
                Cars
            </button>
            <button
                onClick={() => setVehicleType('trucks')}
                className={`${vehicleButtonBaseStyles} ${vehicleType === 'trucks' ? vehicleActiveStyles : vehicleInactiveStyles}`}
            >
                 <Icon name="Truck" className="h-6 w-6" />
                Trucks
            </button>
         </div>

        {/* --- Main Grid Layout --- */}
        {/* Adjusted grid columns: md:grid-cols-3 instead of 2 */}
        {/* The first column (image) takes 1 span, the second (details) takes 2 spans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* --- Left Column: Vertical Image (Takes 1 of 3 columns on md+) --- */}
          <div className="text-center md:text-left md:col-span-1 pb-12">
             <img
              src={currentImage}
              alt={`${currentVehicleTitle} example`}
              // Removed max-w-xs, letting column width control it
              className="rounded-lg shadow-xl mb-8 w-full h-auto object-cover max-h-[70vh] aspect-[9/12] mx-auto md:mx-0"
              onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x600/1F2937/FFFFFF?text=${vehicleType}`; }}
            />
          </div>

          {/* --- Right Column: Title -> Plan Select -> Price Card (Takes 2 of 3 columns on md+) --- */}
          <div className="md:col-span-2">
             {/* --- Dynamic Vehicle Type Title --- */}
             <h3 className="text-2xl font-bold text-white mb-6">
                {currentVehicleTitle}
             </h3>

            {/* Plan Type Toggle */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <button onClick={() => setPlanType('exterior')} className={`${planButtonBaseStyles} ${planType === 'exterior' ? planActiveStyles : planInactiveStyles}`}>Exterior</button>
              <button onClick={() => setPlanType('interior')} className={`${planButtonBaseStyles} ${planType === 'interior' ? planActiveStyles : planInactiveStyles}`}>Interior</button>
              <button onClick={() => setPlanType('ultimate')} className={`${planButtonBaseStyles} ${planType === 'ultimate' ? planActiveStyles : planInactiveStyles}`}>Ultimate (Both)</button>
            </div>

            {/* Pricing Card */}
            {selectedPlan ? (
                <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-primary-400 mb-2">{selectedPlan.name}</h3>
                        <p className="text-5xl font-extrabold text-white mb-6">
                            {selectedPlan.price}
                            <span className="text-lg font-medium text-gray-400"> /one-time</span>
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                            {selectedPlan.features.map((feature, index) => (
                                <li key={index} className="flex items-start text-gray-300">
                                   <Icon name="CheckCircle" className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-1" />
                                   <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="#contact" className="w-full text-center block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            Book This Plan
                        </a>
                    </div>
                </div>
            ) : (
                <p className="text-white text-center text-lg mt-12">Select a plan to see details.</p>
            )}
          </div> {/* End Right Column */}

        </div> {/* End Grid */}
      </div> {/* End Container */}
    </section>
  );
}

export default Services;

