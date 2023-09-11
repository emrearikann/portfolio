/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      colors: {
         backgroundColor: "#181818",
         defaultTextColor: "#4F4E4D",
         nonHoveredColor: "#4F4E4D",
         hoveredColor: "#C7C5C1",
         hoveredDescColor: "#F9F9F9",
         defaultDescColor: "#777777",
         defaultDescColor2: "#C7C5C1",
      },
      extend: {
         fontFamily: {
            primary: ["Poppins"],
         },
         keyframes: {
            wave: {
               "0%": { transform: "rotate(0.0deg)" },
               "15%": { transform: "rotate(14.0deg)" },
               "30%": { transform: "rotate(-8.0deg)" },
               "40%": { transform: "rotate(14.0deg)" },
               "50%": { transform: "rotate(-4.0deg)" },
               "60%": { transform: "rotate(10.0deg)" },
               "70%": { transform: "rotate(0.0deg)" },
               "100%": { transform: "rotate(0.0deg)" },
            },
         },
         animation: {
            wave: "wave 1.5s infinite",
         },
      },
   },
   plugins: [],
};
