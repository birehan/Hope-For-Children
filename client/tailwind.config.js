/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#00B1F4",
        primaryColorHover: "#28C4FF",
        secondaryColor: "#ffffff",
        black: "#000000",
        // Add more custom colors here
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
