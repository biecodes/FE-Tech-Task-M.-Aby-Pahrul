/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2161D5",
        secondary: "#4F5665",
        thirdparty: "#F5F6FA",
        particlesLight: "#4F5665",
        particlesBold: "#0B132A",
        greyFooter: "#F8F8F8",
        cardBorder: "#DDDDDD",
        sideBarText: "#A6B0CF",
      },

      fontFamily: {
        Rubik: "Rubik",
        DMSans: "DM Sans",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
