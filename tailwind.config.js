/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#002b5b",
        lightText: "#dae0e8",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#7ccbfc",
        hovColor: "#1e90ff",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #2d3033, -10px -10px 19px #43484d",
      },
    },
  },
  plugins: [],
};
