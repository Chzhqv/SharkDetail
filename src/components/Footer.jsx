import React from 'react';

const Footer = () => (
    <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Detailing Sharks</h3>
                    <p>Premium Mobile Detailing.<br/>Bringing the shine to your driveway.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
                        <li><a href="#gallery" className="hover:text-cyan-400">Gallery</a></li>
                        <li><a href="#faq" className="hover:text-cyan-400">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
                    <p>Serving the Greater Metro Area</p>
                    <p>Phone: <a href="tel:123-456-7890" className="hover:text-cyan-400">(123) 456-7890</a></p>
                    <p>Email: <a href="mailto:booking@detailingsharks.com" className="hover:text-cyan-400">booking@detailingsharks.com</a></p>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-800 pt-8 text-center">
                <p>&copy; {new Date().getFullYear()} Detailing Sharks. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
