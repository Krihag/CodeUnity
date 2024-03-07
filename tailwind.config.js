/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./**/*.html", "./src/**/*.js"],
    options: {
      safelist: ["left-12", "left-6"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#0D0D25",
        secondary: "#0B4B66",
        light: "#C0E8EB",
        yellow: "#FFE68C",
        orange: "#F5841A",
        background: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
