/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "gradient": "linear-gradient(to bottom, #e9f4f7, #ddeff2, #d0e9ec, #c4e4e5, #b8dfdd, #b2e0da, #aee1d7, #aae2d2, #ace9d2, #b0f0d1, #b6f6ce, #befccb)",
      "gradient-reversed": "linear-gradient(to top, #e9f4f7, #ddeff2, #d0e9ec, #c4e4e5, #b8dfdd, #b2e0da, #aee1d7, #aae2d2, #ace9d2, #b0f0d1, #b6f6ce, #befccb)",
    },
    colors: {
      "green-main": "#3b443b"
    },
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}
