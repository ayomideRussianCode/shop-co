/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customIntegral:['Integral CF'],
        customSatoshi:['Satoshi'],
      }
    },
  },
  plugins: [],
}