/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tiny: "400px",
        xs: "500px",
      },
      colors: {
        alertRed: "#E35454",
        greenGo: "#4FBF85",
      },
      animation: {
        shake: "shake 0.8s cubic-bezier(.36,.07,.19,.97) both",
        lift: "lift 0.8s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        lift: {
          "50%": {
            transform: "translateY(-6px)",
          },
        },
        shake: {
          "10%, 90%": {
            transform: "translateX(-1px)",
          },
          "20%, 80%": {
            transform: "translateX(2px)",
          },
          "30%, 50%, 70%": {
            transform: "translateX(-4px)",
          },
          "40%, 60%": {
            transform: "translateX(4px)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};
