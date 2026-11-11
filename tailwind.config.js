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
        // Reference Theme Tokens (Dark & Lime Accent)
        ink: '#0B0D10',
        cardDark: '#13161B',
        card2Dark: '#1A1F26',
        lime: '#C6F135',
        violet2: '#7C3AED',
        mint: '#5EEAD4',

        // Dark theme tokens
        darkNavy: '#0B0D10',          // #0B0D10 ink background
        navyBlue: '#13161B',          // #13161B dark card background
        cardNavy: '#1A1F26',          // #1A1F26 deeper card
        borderNavy: 'rgba(255, 255, 255, 0.08)',
        electricBlue: '#C6F135',      // Accent color lime
        highlightBlue: '#C6F135',     // Accent color lime
        primaryText: '#EDEEF0',
        secondaryText: '#9AA3B2',

        // Light Green theme tokens
        lightGreenBg: '#F6F6F3',      // Soft off-white
        lightGreenPanel: '#FFFFFF',
        lightGreenCard: '#FFFFFF',
        lightGreenBorder: 'rgba(0, 0, 0, 0.08)',
        lightGreenText: '#0B0D10',
        lightGreenMuted: '#5B6573',
        emeraldAccent: '#C6F135',
        emeraldHighlight: '#C6F135',
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
