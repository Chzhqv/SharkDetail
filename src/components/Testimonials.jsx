import React from 'react';
import { testimonials } from '../data/siteData';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Real Stories, Real Results" 
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col">
              <div className="flex-grow">
                <Icon name="quote" className="h-8 w-8 text-cyan-500 mb-4" />
                <p className="text-gray-400 italic mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-4">
                <img 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x100/374151/FFFFFF?text=${testimonial.name.charAt(0)}`; }}
                />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

