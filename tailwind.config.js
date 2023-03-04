/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#14110F',
      gray: '#888688',
      lightgray: "#888682",
      red: '#DB0047',
      white: '#ECFFF8',
     indigo: "#3730a3"
    },    
    extend: {},
  },
  plugins: [],
}