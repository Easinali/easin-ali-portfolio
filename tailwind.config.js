/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme tokens
        darkNavy: '#101827',
        navyBlue: '#172338',
        cardNavy: '#1a263c',
        borderNavy: '#283955',
        electricBlue: '#3B82F6',
        highlightBlue: '#75B8FF',
        primaryText: '#FFFFFF',
        secondaryText: '#CBD5E1',

        // Custom Vibrant Theme tokens
        limeHighlight: '#C6F135',
        radialBlue: '#3F5EFB',
        radialPink: '#FC466B',

        // Light Green theme tokens
        lightGreenBg: '#C6F135',      // Lime vibrant background
        lightGreenPanel: '#d4f558',   // Slightly deeper panel
        lightGreenCard: '#FFFFFF',    // Clean card surface
        lightGreenBorder: '#aee81e',  // Lime border
        lightGreenText: '#101827',    // High-contrast dark text
        lightGreenMuted: '#374151',   // Muted text
        emeraldAccent: '#C6F135',     // Accent
        emeraldHighlight: '#C6F135',  // Highlight
      },
      fontFamily: {
        sans: ['Inter', 'Hind Siliguri', 'sans-serif'],
        bengali: ['Hind Siliguri', 'Noto Sans Bengali', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(59, 130, 246, 0.35)',
        'glow-green': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.25)',
        'radial-bar': '0 10px 35px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.15)',
        'radial-bar-dark': '0 10px 35px -5px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.25)',
      }
    },
  },
  plugins: [],
}
