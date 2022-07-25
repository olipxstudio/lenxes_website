

/** @type {import('tailwindcss').Config} */
const forms = require("@tailwindcss/forms");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      luxurious: ["Luxurious Script"],
      millik: ["Millik"],
    },
    extend: {},
  },
  // plugins: [forms],
  plugins: [forms, require("flowbite/plugin")],
};
