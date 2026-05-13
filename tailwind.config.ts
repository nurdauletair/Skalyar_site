import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0D12",
        mist: "#F6F7F9",
        line: "#E6E8EC",
        graphite: "#1B2430",
        signal: "#1F8A70",
        cobalt: "#2357D9"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(10, 13, 18, 0.10)",
        panel: "0 18px 48px rgba(10, 13, 18, 0.18)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
