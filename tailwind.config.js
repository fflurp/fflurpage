/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ["Gordita Medium"],
      ["title-bold"]: ["Gordita Bold"],
    },
    colors: {
      mountain: {
        100: "#FFFFFF",
        200: "#FCFCFC",
        300: "#F9F9F9",
        400: "#E8E8E8",
        500: "#CECECE",
        600: "#646464",
        700: "#202020",
      },
      ...colors,
    },
  },
  plugins: [],
};
