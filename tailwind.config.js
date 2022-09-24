/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "default-logo":
          "url('https://raw.githubusercontent.com/technocalorie/brainfreeze/main/public/neutechLogoColorWithText.svg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#631c96",

          secondary: "#97f4a4",

          accent: "#ce1c43",

          neutral: "#182026",

          "base-100": "#E3E5E8",

          info: "#73B8D9",

          success: "#16643C",

          warning: "#FAD029",

          error: "#E0486E",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
