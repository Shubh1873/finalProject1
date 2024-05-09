/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"300":"#93c5fd","700":"#b2daf2"}
      }
    },
  },
  plugins: [],
}
