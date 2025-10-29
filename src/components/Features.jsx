import React from 'react';
import { coreFeatures } from '../data/siteData';
import Icon from './Icon';

const Features = () => {
  return (
    // Use the primary dark background
    <section id="features" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 text-center">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon - Use primary color */}
              <div className="mb-4 text-primary-400"> {/* Updated color */}
                <Icon name={feature.icon} className="h-12 w-12 md:h-14 md:w-14" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
