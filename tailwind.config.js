/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IntegralReg: ["Integral-reg"],
        IntegralBold: ["Integral-bold"],
        Satoshi: ["Satoshi"],
        Poppins:["Poppins"],
      },
    },
  },
  plugins: [],
};
