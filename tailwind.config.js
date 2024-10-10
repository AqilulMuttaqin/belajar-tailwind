/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        unevenBorderRadius: {
          '0%, 100%': { borderRadius: '50% 30% 50% 30%' },
          '50%': { borderRadius: '30% 50% 30% 50%' },
        },
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        uneven: 'unevenBorderRadius 5s infinite ease-in-out',
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
    },
  },
  plugins: [],
}

