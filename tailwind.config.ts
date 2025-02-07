import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#7CFc00",
          light: "#ADFF2F",
          dark: "#7FFF00",
        },
        white: {
          DEFAULT: "#ffffff",
          theme: "#f4faf2",
        },
        black: {
          DEFAULT: "#000000",
          theme: "#2e332d",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
