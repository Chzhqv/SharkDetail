/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- NEW PALETTE ---
        primary: { // Dark Green from logo
          DEFAULT: '#2E5948', // Eyedropped from logo
          '50': '#EAF0ED',
          '100': '#D4E1DB',
          '200': '#A9C4B8',
          '300': '#7FA695',
          '400': '#548972',
          '500': '#2E5948', // Main dark green
          '600': '#244739',
          '700': '#1A352B',
          '800': '#10231D',
          '900': '#07120F',
          '950': '#020706',
        },
        accent: { // Lighter Green from previous logo (keep for variety?)
          DEFAULT: '#3DBB8F',
          // ... (keep previous shades or adjust)
          '400': '#57CFAB',
          '500': '#3DBB8F',
          '600': '#2FA378',
        },
        background: {
          light: '#D9D9D9', // Light grey from logo background
          offwhite: '#F5F5F3', // Off-white from shark belly
        },
        // --- END NEW PALETTE ---

        // Keep the dark theme background
        gray: {
          '700': '#374151', // Added for button inactive states
          '800': '#1F2937', // Slightly lighter dark
          '900': '#111827', // Main dark background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      textShadow: { /* ...keep existing textShadow... */ },
      animation: { /* ...keep existing animation... */ },
      keyframes: { /* ...keep existing keyframes... */ },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-dashed': {
          // Use the new primary green for the dashed line
          'background-image': 'linear-gradient(to right, #2E5948 40%, rgba(255, 255, 255, 0) 0%)',
          'background-position': 'bottom',
          'background-size': '15px 2px',
          'background-repeat': 'repeat-x'
        }
      })
    }
  ],
}

