/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d82b17",

          secondary: "#9f8fea",

          accent: "#aaffb7",

          neutral: "#342234",

          "base-100": "#FFFFFF",

          info: "#65A9CD",

          success: "#61E5A5",

          warning: "#A46F04",

          error: "#F41528",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
