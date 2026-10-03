import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-color-primary)",
          secondary: "var(--brand-color-secondary)",
          accent: "var(--brand-color-accent)",
          bg: "var(--brand-color-background)",
          surface: "var(--brand-color-surface)",
          "surface-hover": "var(--brand-color-surface-hover)",
          text: "var(--brand-color-text)",
          muted: "var(--brand-color-text-muted)",
          border: "var(--brand-color-border)",
        },
      },
      fontFamily: {
        "brand-sans": ["var(--brand-font-sans)"],
        "brand-mono": ["var(--brand-font-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
