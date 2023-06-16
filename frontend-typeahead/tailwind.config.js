module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2d2d3f",
        light: "#F0F0F0",
      },
    },
  },
  variants: {
    extend: {
      width: ["hover", "focus"],
    },
  },
  plugins: [],
};
