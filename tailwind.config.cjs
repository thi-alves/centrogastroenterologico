/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#6e1518",
        secondary: "#ff3440",
        black: "#150707",
        white: "#fff",
        gray_white:"#fcfcfc",
        gray:" #e5d9dd",
        light_red: "#efdddc",
        gray_red:"#645151"
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};