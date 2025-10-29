import React from 'react';

const SectionTitle = ({ title, subtitle, titleClassName, subtitleClassName }) => (
    <div className="text-center mb-12 md:mb-16">
        <h2 className={`font-bold leading-tight ${titleClassName || 'text-3xl md:text-4xl lg:text-5xl text-white'}`}>
            {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 max-w-3xl mx-auto ${subtitleClassName || 'text-lg text-gray-400'}`}>
              {subtitle}
          </p>
        )}
    </div>
);

export default SectionTitle;
