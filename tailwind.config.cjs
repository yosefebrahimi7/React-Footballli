/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        webapp: `IRANSans, sans-serif`,
        number: `Inter, sans-serif`,
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#5b9a3f",
        secondary: "#4d6bcc",
        tertiary: "#f5f6fb",
        onyx: "#070707",
        "smoky-black": "#cbd1cc",
        main: "#ffffff",
      },
    },
  },
  mode: "jit",
  plugins: [require("@tailwindcss/forms")],
};
