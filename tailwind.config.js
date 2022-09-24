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
    themes: ["cyberpunk"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
