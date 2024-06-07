/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inknut: ["Inknut Antiqua", 'serif'], 
      },
      colors: {
        yellow: '#DAAB3A',
        beige: '#EEE6D8',
        Brown: '#543B00',
        orange: '#B67332',
        LightBeige: '#C9BDA4',
      },
      spacing: {
        '30': '7.5rem', 
      },
      margin: {
        '-8': '-2rem',
      },
    },
  },
  plugins: [],
}
