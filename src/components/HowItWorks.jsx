import React from 'react';
import { howItWorksSteps } from '../data/siteData';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="How It Works" 
          subtitle="Simple Steps to a Sparkling Car" 
        />
        <div className="mt-12 relative">
          {/* Dashed line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
             <div className="w-full h-full bg-dashed"></div>
          </div>

          <div className="relative grid md:grid-cols-3 gap-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center z-10">
                <div className="relative inline-block">
                  <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-900 border-4 border-cyan-500 text-cyan-400 mx-auto mb-6">
                    <Icon name={step.icon} className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

