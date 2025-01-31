/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      container: {
        center: true,
      },
      lineHeight: {
        133: "133%",
        111: "111%",
        117: "117%",
      },
      colors: {
        primary: "#00FF0D",
        dark: {
          400: "#1E1E1E",
          500: "#161616",
          600: "#2E2E2E",
          700: "#8C8C8C",
          800: "#292929",
        },
      }
    },
  },
  plugins: [],
}