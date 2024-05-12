/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": "#5551FF",
      white: "#FFFFFF",
      black: "#00050F",
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      primaryFont: "'Figtree', sans-serif",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/banner-image.jpg')",
      },
    },
  },
  plugins: [],
};
