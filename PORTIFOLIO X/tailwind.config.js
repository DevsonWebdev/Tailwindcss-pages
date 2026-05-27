/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/js/index.js"],
  theme: {
    extend: {
      fontFamily: {
        monsterate: ["Montserrat", "sans-serif"],
        audiowide: ["Audiowide", " sans-seri"],
      },
      colors: {
        primary: "#f4f4f4",
        accent: "#6049ea",
        dark: "#1d1d1d",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
