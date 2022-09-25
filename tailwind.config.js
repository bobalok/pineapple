/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
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

  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
