/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      padding: {
        center: true,
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        primary: "#6e1518",
        secondary: "#ff3440",
        black: "#150707",
        white: "#fff",
        gray:" #f3f0f0",
        gray_white:"#fcfcfc",
        light_red: "#efdddc",
        gray_red:"#645151"
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    screens: {
      sm: "768px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};