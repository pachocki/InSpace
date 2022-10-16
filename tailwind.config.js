/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      colors: {
        shadow: "rgb(185, 185, 185);",
      },
      screens: {
        "big-screen": { max: "2000px" },
        // => @media (max-width: 1535px) { ... }

        laptop: { max: "1450px" },
        // => @media (max-width: 1279px) { ... }

        screen: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        tablet: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        mobile: { max: "640px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
