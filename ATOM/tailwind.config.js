/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/js/index.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans Code", "monospace"],
        orbt: ["Orbitron", "sans-serif"],
      },
      colors: {
        dark: "#121212",
        primary: "#FDFCF4",
        accent: "#00FFFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
