/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#3D55CC",
        darkest: "#141A33",
        dark: "#505673",
        medium: "#878CA8",
        light: "#DADEF2",
        lightest: "#F5F6FA",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
