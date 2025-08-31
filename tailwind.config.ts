import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kanhaGreen: "#2B5D3A",
        terracotta: "#A4572D",
        millet: "#E8DCC3",
        monsoon: "#8AA6B1",
        soil: "#1C1C1A",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      boxShadow: {
        soft: "0px 4px 24px 0px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [typography],
};
export default config;
