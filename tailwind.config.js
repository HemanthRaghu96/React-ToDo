/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors:{
        edit:'#15ac88',
        card:'#ccf4d2',
        delete:'#d15e1e',
        status:'#fa8380',
      }
    },
  },
  plugins: [],
}

