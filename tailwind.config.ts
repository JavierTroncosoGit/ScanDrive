import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFC805",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
