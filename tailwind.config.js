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
  // daisyui: {
  //   themes: false,
  // }
      // daisyUI config (optional)
      daisyui: {
        themes: [
          {
            my_theme: {
              // primary: "#3b82f6",
              // secondary: "#F04A7D",
              // accent: "#0F172A",
              // info: "#6D28D9",
              // neutral: "#e0e0e8",
              // warning: "#0F172A",
              
              "base-100": "#ffffff",
              "base-200": "#f8fafc",
              "base-300": "#f0f0f0",
            },
          },
          {
            my_dark: {
              // primary: "#3ABFF8",
              // secondary: "#F04A7D",
              // accent: "#0284C7",
              // info: "#0284C7",
              // neutral: "#282e3f",
              // warning: "#E2E8F0",

              "base-100": "#191D24",
              "base-200": "#162032",
              "base-300": "#1E293B",
            },
          },
          "light",
          "dracula",
        ],
      },
  
}
