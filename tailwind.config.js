/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#047857',
        dark: '#1e293b',
        secondary: '#8aaaa5',
      },
      screens:{
        '2xl' : '1320px',
      },
    },
    listStyleType: {
          none: 'none',
          disc: 'disc',
          decimal: 'decimal',
          square: 'square',
          roman: 'upper-roman',
    },
  },
  plugins: [],
}
