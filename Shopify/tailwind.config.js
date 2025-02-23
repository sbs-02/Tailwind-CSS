/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    screens: {
      sm: "768px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1024px) { ... }

      xl: "1536px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1800px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "2400px",
    },
    extend: {},
  },
  plugins: [],
};
