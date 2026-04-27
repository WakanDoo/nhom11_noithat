import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serifBrand: ["var(--font-brand)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
        nav: ["var(--font-roboto)", "Roboto", "Arial", "sans-serif"]
      },
      boxShadow: {
        rail: "0 10px 40px rgba(0, 0, 0, 0.08)",
        pill: "0 8px 12px rgba(0, 0, 0, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
