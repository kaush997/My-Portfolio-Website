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
        bodyColor: "#160040",
        lightText: "#dae0e8",
        /*boxBg: "linear-gradient(#FFFFFF, #FFFFFF, #FFFFFF)",*/
        designColor: "#8E05C2",
        profBack: "#370140",
        titleCol: "#d186ff",
        lineCol: "#FFFFFF",
        drkCol: "#000000",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #2d3033, -10px -10px 19px #43484d",
      },
    },
  },
  plugins: [],
};
