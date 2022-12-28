/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/html/*.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        lato: ['lato']
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [],
}