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
     
    extend: {      
      backgroundImage: {       
        "nature-light": "url('/images/ameen-fahmy-HSo-6tRqpTM-unsplash.jpg')",    
        "nature-dark": "url('/nature-dark.jpg')",      
      },
    }
  },
  plugins: [],
}