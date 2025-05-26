
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
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s ease-out forwards',
        'rotate-in': 'rotateIn 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        rotateIn: {
          '0%': { transform: 'rotate(-180deg) scale(0.8)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #e2d3a3, 0 0 10px #e2d3a3, 0 0 15px #e2d3a3' },
          '100%': { boxShadow: '0 0 10px #e2d3a3, 0 0 20px #e2d3a3, 0 0 30px #e2d3a3' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(226, 211, 163, 0.5)',
        'glow-lg': '0 0 40px rgba(226, 211, 163, 0.6)',
      }
    },
  },
  plugins: [],
};
