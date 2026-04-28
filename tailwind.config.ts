import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        owl: {
          text: "#2c2825",
          soft: "#6b6560",
          muted: "#9b938c",
          gold: "#b89968",
          dark: "#2f2927",
          wash: "#faf8f5",
        },
      },
      fontFamily: {
        body: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        nav: ["var(--font-roboto)", "var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
