/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: '#101827',
        navyBlue: '#172338',
        cardNavy: '#1a263c',
        borderNavy: '#283955',
        electricBlue: '#3B82F6',
        highlightBlue: '#75B8FF',
        primaryText: '#FFFFFF',
        secondaryText: '#CBD5E1',
      },
      fontFamily: {
        sans: ['Inter', 'Hind Siliguri', 'sans-serif'],
        bengali: ['Hind Siliguri', 'Noto Sans Bengali', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

