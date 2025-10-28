// Updated navigation links for the simplified header
export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Washing Price' },
];

// Content for the Hero/Home section
export const heroData = {
  headline: "Professional Washing & Cleaning of your Car",
  subheadline: "We use high-quality equipment and safety materials to ensure a great clean for your vehicle. Get started by choosing a plan below.",
  ctaButton: "Choose a Plan" // Button now scrolls to services
};

// Pricing data - kept the same structure for now
export const services = {
  cars: {
    exterior: {
      name: 'Exterior Wash & Wax',
      price: '75', // Price as a number/string for easier use
      features: [
        'Complete exterior hand wash',
        'High-quality carnauba wax',
        'Wheel and tire cleaning & dressing',
        'Exterior window cleaning',
        'Door jamb cleaning',
      ],
    },
    interior: {
      name: 'Interior Deep Clean',
      price: '95',
      features: [
        'Thorough vacuuming of seats & carpets',
        'Wipe down of all hard surfaces',
        'Leather conditioning (if applicable)',
        'Interior window cleaning',
        'Air freshener treatment',
      ],
    },
    ultimate: {
      name: 'Ultimate Detailing Package',
      price: '150',
      features: [
        'Includes all Exterior & Interior features',
        'Carpet & upholstery shampooing',
        'Clay bar treatment for paint',
        'Engine bay cleaning',
        'Headlight restoration',
      ],
    },
  },
  trucks: {
    exterior: {
      name: 'Exterior Wash & Wax',
      price: '95',
      features: [
        'Complete exterior hand wash',
        'High-quality carnauba wax',
        'Wheel and tire cleaning & dressing',
        'Exterior window cleaning',
        'Running board & bed cleaning',
      ],
    },
    interior: {
      name: 'Interior Deep Clean',
      price: '115',
      features: [
        'Thorough vacuuming of seats & carpets',
        'Wipe down of all hard surfaces',
        'Leather conditioning (if applicable)',
        'Interior window cleaning',
        'Air freshener treatment',
      ],
    },
    ultimate: {
      name: 'Ultimate Detailing Package',
      price: '195',
      features: [
        'Includes all Exterior & Interior features',
        'Carpet & upholstery shampooing',
        'Clay bar treatment for paint',
        'Engine bay cleaning',
        'Bed liner cleaning & dressing',
      ],
    },
  },
};

// Add other data if needed as we build more sections later
