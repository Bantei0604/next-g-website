/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zenrty", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#dfdff0",
          75: "#dfdff2",
          100: "#f0f2fa",
          200: "#010101",
          300: "#4fb7dd",
          neonBlue: "#0ff",
          neonGreen: "#0f0",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e98df",
          300: "#edff66",
        },
      },
      boxShadow: {
        neon: "0 0 10px 2px #0ff, 0 0 20px 4px #0f0",
      },
      gradientColorStops: {
        gray: {
          900: "#1f2937",
        },
        black: "#000000",
      },
    },
  },
  plugins: [],
};
