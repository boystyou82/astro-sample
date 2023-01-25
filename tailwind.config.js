/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.astro", "./public/assets/scripts/**/*.js"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        toast: {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "50%": { opacity: 0.5, transform: "translateY(0)" },
          "80%": { opacity: 0.5 },
          "100%": { transform: "translateY(0)", opacity: 0 },
        },
      },
      animation: {
        toast: "toast 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  darkMode: false,
};
