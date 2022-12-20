/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#5800FF',
        grey: '#C8C8C8'
      },
      screens: {
        '2xl': '1320px',
        'sm': '600px'
      },
    },
  },
  plugins: [],
}
