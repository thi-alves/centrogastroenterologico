/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
      'md': '768px',      // Medium screens (e.g. tablets)
      'lg': '1024px',     // Large screens (e.g. laptops/desktops)
      'xl': '1280px',     // Extra large screens (e.g. large desktops)
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};