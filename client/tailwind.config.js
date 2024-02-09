const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Alike: ["Alike", "sans-serif"],
      Poppins: ["poppins", "sans-serif"],
      Questrial: ["questrial"],
      Belfast: ["Belfast Grotesk", "san-serif"],
      WorkSans: ["WorkSans", "sans-serif"]
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      fontFamily: {
        questrial: "Questrial",
      },
      colors: {
        primary: "#D305B1",
        secondary: "#470049",
        secondaryPurple: "#CF57BB",
        "main-bg": "#fff",
        "hero-dark": "#0D0D0D",
        "main-dark": "#171717",
        "card-dark": "#362536",
        "dark-gray": "#242424",
        "dark-light": "#292929",
        "hover-color-dark": "#101010",
        "gray": "#BABABA",
        dark: "#101010",
      },
      gridTemplateColumns: {
        "16-auto": "250px auto",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-muted": {
          opacity: 0.8,
        },
        ".text-full-opacity": {
          opacity: 1,
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".card-shadow": {
          boxShadow: " 0 0 0.8rem 0.25rem rgba(0, 0, 0, 0.1)",
        },
        ".shadow-light": {
          boxShadow: "0.1rem 0.1rem 0.3rem .1rem rgba(0, 0, 0, 0.05)",
        },
        ".border-light": {
          border: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".input-shadow": {
          boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
        },
        ".input-dark-shadow": {
          boxShadow: "0 0 0 1000px #13131A inset !important",
        },
        ".inputAutofillColor": {
          "-webkit-text-fill-color": "#ccc",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
