/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        floating: "float 5s ease-out infinite",
        spinning: "spin 7s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
          "75%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0px)" },
        },
        spin: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        gold: "#dcca87",
        dark: "#0c0b08",
        brown: "#363225",
      },
    },
  },
  plugins: [],
};
