/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#FFFFFF",
          200: "#F7F6FF",
          300: "#F6F6F6",
          400: "#595959",
          500: "#262626",
          900: "#191635",
        },
        primary: {
          400: "#F0F4FE",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        euclid: ["'Euclid Circular B'", "sans-serif"],
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
