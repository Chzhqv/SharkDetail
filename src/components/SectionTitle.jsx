import React from 'react';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            {subtitle}
        </p>
    </div>
);

export default SectionTitle;

