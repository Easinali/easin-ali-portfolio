/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core dark palette
        darkNavy:    '#080C14',
        navyBlue:    '#0D1424',
        cardNavy:    '#111B2E',
        borderNavy:  '#1A2840',
        // Electric accent
        electricBlue: '#3B82F6',
        highlightBlue:'#60A5FA',
        // Editorial surfaces
        warmWhite:   '#F0EBE0',
        offWhite:    '#D6D0C8',
        // Terminal accent
        crtGreen:    '#39FF14',
        crtAmber:    '#FFB800',
        // Text
        primaryText:   '#F0EBE0',
        secondaryText: '#8A95A8',
      },
      fontFamily: {
        sans:   ['Inter', 'Hind Siliguri', 'sans-serif'],
        mono:   ['"JetBrains Mono"', '"Courier New"', 'ui-monospace', 'monospace'],
        bengali:['Hind Siliguri', 'Noto Sans Bengali', 'sans-serif'],
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1' }],
        '9xl':  ['8rem',   { lineHeight: '1' }],
        '10xl': ['10rem',  { lineHeight: '1' }],
        '11xl': ['12rem',  { lineHeight: '0.9' }],
      },
      boxShadow: {
        'glow':      '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'glow-lg':   '0 0 50px -10px rgba(59, 130, 246, 0.5)',
        'card':      '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
        'editorial': '4px 4px 0px 0px rgba(59, 130, 246, 0.6)',
        'terminal':  'inset 0 0 30px rgba(57, 255, 20, 0.05)',
      },
      animation: {
        'blink':        'blink 1s step-end infinite',
        'scan-line':    'scanLine 6s linear infinite',
        'text-reveal':  'textReveal 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-up':      'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-in-left':'slideInLeft 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'clip-reveal':  'clipReveal 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'progress-bar': 'progressBar 2s ease-out forwards',
        'float':        'float 6s ease-in-out infinite',
        'grain':        'grain 8s steps(10) infinite',
        'glitch':       'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        textReveal: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        clipReveal: {
          '0%':   { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        progressBar: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        grain: {
          '0%,100%': { transform:'translate(0,0)' },
          '10%':     { transform:'translate(-2%,-3%)' },
          '20%':     { transform:'translate(3%,2%)' },
          '30%':     { transform:'translate(-1%,4%)' },
          '40%':     { transform:'translate(2%,-1%)' },
          '50%':     { transform:'translate(-3%,2%)' },
          '60%':     { transform:'translate(1%,-4%)' },
          '70%':     { transform:'translate(-2%,3%)' },
          '80%':     { transform:'translate(4%,-2%)' },
          '90%':     { transform:'translate(-1%,1%)' },
        },
        glitch: {
          '0%':   { transform: 'translate(0)' },
          '20%':  { transform: 'translate(-2px, 2px)' },
          '40%':  { transform: 'translate(2px, -2px)' },
          '60%':  { transform: 'translate(-2px, 0px)' },
          '80%':  { transform: 'translate(2px, 2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      transitionTimingFunction: {
        'spring':   'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth':   'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'editorial-grid': `
          linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
        `,
        'scan-lines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
      },
      backgroundSize: {
        'grid-80': '80px 80px',
        'grid-40': '40px 40px',
      },
    },
  },
  plugins: [],
}
