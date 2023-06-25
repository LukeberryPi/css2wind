/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alertRed: "#E35454",
        berryBlue: "#79CBE3",
        purplePlus: "#C679E3",
        greenGo: "#4FBF85",
      },
    },
  },
  plugins: [],
};
