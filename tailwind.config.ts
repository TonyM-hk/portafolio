import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D12",
        paper: "#FFFFFF",
        mist: "#F4F5F7",
        line: "#E5E7EB",
        "line-dark": "#1F2430",
        surface: "#FFFFFF",
        "surface-dark": "#12151C",
        primary: {
          DEFAULT: "#2563EB",
          50: "#EFF4FF",
          100: "#DCE7FF",
          400: "#5B87F5",
          500: "#2563EB",
          600: "#1D4FC4",
          700: "#173D99",
        },
        muted: "#64748B",
        "muted-dark": "#8B93A7",
        accent: "#16A34A",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "JetBrains Mono",
          "Fira Code",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.10)",
        "soft-dark": "0 1px 2px rgba(0, 0, 0, 0.3), 0 8px 30px -8px rgba(0, 0, 0, 0.55)",
        glow: "0 0 0 1px rgba(37,99,235,0.15), 0 8px 30px -8px rgba(37,99,235,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
