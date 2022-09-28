/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      mon: ['Montserrat'],
      sans: ['Open Sans'],
      oswald: ['Oswald'],
      roboto: ['Roboto']

    },
    extend: {},
  },
  plugins: [require("daisyui")],

  // stope for auto darkness 
  daisyui: {
    themes: false,
  }
}
