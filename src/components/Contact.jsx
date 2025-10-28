import React from 'react';

const Contact = () => (
    <section id="contact" className="py-20 md:py-28 bg-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for That New Car Feeling?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Don't wait another day to give your car the attention it deserves. Contact us now to schedule your premium mobile detailing service.
            </p>
            <a href="tel:123-456-7890" className="inline-block bg-white hover:bg-gray-200 text-cyan-500 font-bold text-lg py-3 px-10 rounded-lg transition-transform duration-300 hover:scale-105 shadow-xl">
                Call (123) 456-7890
            </a>
            <p className="mt-4 text-gray-100">Or email us at <a href="mailto:booking@detailingsharks.com" className="underline hover:text-white">booking@detailingsharks.com</a></p>
        </div>
    </section>
);

export default Contact;
