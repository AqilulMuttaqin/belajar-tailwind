/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'uneven-border-radius': {
          '0%, 100%': { borderRadius: '50% 30% 50% 30%' },
          '50%': { borderRadius: '30% 50% 30% 50%' },
        },
        'bounce-custom': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'tilt-right': {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(15deg)' },
        },
        'tilt-left': {
          '0%, 100%': { transform: 'rotate(15deg)' },
          '25%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        'spin-custom': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'zoom-in-out': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'uneven-border-radius': 'uneven-border-radius 5s infinite ease-in-out',
        'bounce-custom': 'bounce-custom 2s ease infinite',
        'tilt-right': 'tilt-right 4s ease infinite',
        'tilt-left': 'tilt-left 4s ease infinite',
        'spin-custom': 'spin-custom 5s linear infinite',
        'zoom-in-out': 'zoom-in-out 2s ease infinite',
      },
    },
  },
  plugins: [],
}

