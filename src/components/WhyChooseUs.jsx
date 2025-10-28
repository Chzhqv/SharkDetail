import React from 'react';
import { whyChooseUsPoints } from '../data/siteData';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-20 md:py-28 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Why Choose Detailing Sharks?"
                    subtitle="We're not just cleaners; we're caretakers for your vehicle. We combine passion with professionalism to deliver unmatched results."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUsPoints.map((point, index) => (
                        <div key={index} className="text-center p-6 bg-gray-900 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500 mx-auto mb-5 text-white">
                                <Icon name={point.icon} className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                            <p className="text-gray-400">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

