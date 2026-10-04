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
          bgAlt: "var(--brand-color-background-alt)",
          surface: "var(--brand-color-surface)",
          "surface-hover": "var(--brand-color-surface-hover)",
          surfaceHover: "var(--brand-color-surface-hover)",
          surfaceGlass: "var(--brand-color-surface-glass)",
          border: "var(--brand-color-border)",
          borderMuted: "var(--brand-color-border-muted)",
          borderHighlight: "var(--brand-color-border-highlight)",
          text: "var(--brand-color-text)",
          muted: "var(--brand-color-text-muted)",
          subtle: "var(--brand-color-text-subtle)",
        },
        status: {
          success: "var(--status-color-success)",
          warning: "var(--status-color-warning)",
          error: "var(--status-color-error)",
          info: "var(--status-color-info)",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        "brand-sans": ["var(--brand-font-sans)"],
        "brand-mono": ["var(--brand-font-mono)"],
      },
      fontSize: {
        heroDisplay: ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "800" }],
        h1: ["3rem", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "800" }],
        h2: ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        h3: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }],
        lead: ["1.25rem", { lineHeight: "1.6", letterSpacing: "normal", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", letterSpacing: "normal", fontWeight: "400" }],
        bodySmall: ["0.875rem", { lineHeight: "1.5", letterSpacing: "normal", fontWeight: "400" }],
        badge: ["0.75rem", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "600" }],
        code: ["0.875rem", { lineHeight: "1.4", letterSpacing: "normal", fontWeight: "500" }],
      },
      borderRadius: {
        none: "0px",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        card: "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)",
        glowBlue: "0 0 35px -5px rgba(37, 99, 235, 0.35)",
        glowAccent: "0 0 25px -5px rgba(56, 189, 248, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
