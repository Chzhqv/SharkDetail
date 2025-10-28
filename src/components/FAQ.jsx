import React, { useState } from 'react';
import { faqItems } from '../data/siteData';
import SectionTitle from './SectionTitle';
import Icon from './Icon';


const FAQItem = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-700">
        <button
            className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
            onClick={onClick}
        >
            <span className="text-lg font-medium text-white">{item.question}</span>
            <Icon name="ChevronDown" className={`h-6 w-6 text-cyan-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}/>
        </button>
        <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="p-6 pt-0 text-gray-400">
                <p>{item.answer}</p>
            </div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Frequently Asked Questions"
                    subtitle="Have questions? We've got answers."
                />
                <div className="mt-12 max-w-3xl mx-auto">
                  <div className="bg-gray-800 rounded-lg shadow-lg">
                    {faqItems.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                  </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

