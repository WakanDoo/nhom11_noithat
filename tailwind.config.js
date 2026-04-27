/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Didot", "Bodoni 72", "Bodoni MT", "Georgia", "serif"],
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.08em",
      },
    },
  },
  plugins: [],
};
