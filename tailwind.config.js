/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(25, 97%, 53%)",
        lGray: "hsl(217, 12%, 63%)",
        dBlue: "hsl(213, 19%, 18%)",
        vdBlue: "hsl(216, 12%, 8%)",
        mdGray: "hsl(216, 12%, 30%)",
      },
      fontFamily: {
        font: ['Overpass'],
      }
    },
  },
  plugins: [],
}

