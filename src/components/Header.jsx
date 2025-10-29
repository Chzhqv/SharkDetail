import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/siteData';
import Icon from './Icon';
import SharkLogo from '../assets/shark-logo.jpg'; // Ensure this path is correct

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine text color based on scroll state for better visibility on transparent header
  const textColorClass = isScrolled ? 'text-primary-500' : 'text-white sm:text-primary-500'; // White when transparent, green when scrolled (on small screens stays white until scrolled)
  const navLinkColorClass = isScrolled ? 'text-primary-700 hover:text-primary-500' : 'text-gray-200 hover:text-white'; // Lighter when transparent


  return (
    // Make header background transition smoothly
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img src={SharkLogo} alt="Detailing Sharks Logo" className="h-14 w-auto mr-3" />
              {/* --- Bigger text, dark green color (conditionally based on scroll) --- */}
              <span className={`text-3xl font-bold ${textColorClass} hidden sm:inline transition-colors duration-300`}> {/* Increased size, dynamic color */}
                Shark Detailing
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            {/* Added more space between links with lg:space-x-6 */}
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  // --- Bigger text size (text-base), dynamic dark green/light color, updated hover ---
                  className={`${navLinkColorClass} px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300`} /* Increased size, dynamic color, added duration */
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              // Adjusted mobile button colors slightly for consistency
              className="bg-gray-800/50 hover:bg-gray-700/70 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <Icon name="Menu" className="block h-6 w-6" />
              ) : (
                <Icon name="X" className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        // Use slightly darker background for mobile menu popup
        <div className="md:hidden absolute top-full left-0 right-0 shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                 // --- Bigger text size for mobile, dark green color ---
                className="text-primary-600 hover:bg-gray-700 hover:text-primary-400 block px-3 py-2 rounded-md text-lg font-semibold transition-colors" /* Increased size, primary color */
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

