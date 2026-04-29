import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        owl: {
          black: "#111111",
          dark: "#0a0a0a",
          gray: {
            100: "#777777",
            200: "#111111",
            300: "#0a0a0a",
            400: "rgba(255, 255, 255, 0.6)",
            500: "rgba(0, 0, 0, 0.3)",
          },
          white: "#ffffff",
          cream: "#f7f7f7",
          warm: "#f5f5f5",
          border: "rgba(231, 227, 220, 0.9)",
          text: {
            primary: "#111111",
            secondary: "#6f6a64",
            muted: "#706b66",
            label: "#5b5752",
            placeholder: "#a9a39c",
          },
          error: "#d93025",
          success: "#1f7a36",
        },
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        georgia: ["Georgia", "serif"],
      },
      fontSize: {
        "display-lg": ["72px", { lineHeight: "72px" }],
        "display-md": ["64px", { lineHeight: "64px" }],
        "display-sm": ["56px", { lineHeight: "54px" }],
        "heading-2": ["56px", { lineHeight: "54px", letterSpacing: "-0.4px" }],
        "heading-3": ["32px", { lineHeight: "38px" }],
        "heading-4": ["24px", { lineHeight: "1", letterSpacing: "0.2px" }],
        "body-lg": ["20px", { lineHeight: "28px" }],
        "body-md": ["18px", { lineHeight: "24px" }],
        "body-base": ["15px", { lineHeight: "24px" }],
        "body-sm": ["14px", { lineHeight: "20px" }],
        "body-xs": ["13px", { lineHeight: "20px" }],
        "label": ["11px", { lineHeight: "16px", letterSpacing: "1.2px" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
      },
      maxWidth: {
        container: "1280px",
        content: "1200px",
      },
      borderRadius: {
        "2xl": "16px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 18px 42px rgba(17, 17, 17, 0.06)",
        map: "0 20px 52px rgba(17, 17, 17, 0.08)",
        drop: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
        "input-focus": "0 0 0 4px rgba(17, 17, 17, 0.03)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.34) 100%)",
        "showroom-overlay": "rgba(0, 0, 0, 0.34)",
      },
      aspectRatio: {
        gallery: "392 / 296",
      },
    },
  },
  plugins: [],
};

export default config;
