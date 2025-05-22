/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gold': '#e2d3a3',
        'gold-secondary': '#8e8462',
        'dark-bg': '#121212',
        'dark-secondary': '#1a1a1a',
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444'
      },
      fontFamily: {
        'cinzel': ['"Cinzel"', 'serif'],
        'cinzel-decorative': ['"Cinzel Decorative"', 'serif']
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
      },
    },
  },
  plugins: [],
};