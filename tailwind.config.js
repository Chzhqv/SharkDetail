/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      textShadow: {
        'md': '0 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '0 4px 10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-dashed': {
          'background-image': 'linear-gradient(to right, rgb(14 165 233) 40%, rgba(255, 255, 255, 0) 0%)',
          'background-position': 'bottom',
          'background-size': '15px 2px',
          'background-repeat': 'repeat-x'
        }
      })
    }
  ],
}


