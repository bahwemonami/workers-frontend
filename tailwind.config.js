/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'workers-orange': {
          DEFAULT: '#FF6B00',
          light: '#FF8533',
          dark: '#E55D00',
        },
        'workers-blue': {
          DEFAULT: '#0066CC',
          light: '#3385D6',
          dark: '#004C99',
        },
        'dark': {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          lighter: '#333333',
        }
      },
      fontFamily: {
        'heading': ['Oswald', 'Impact', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

