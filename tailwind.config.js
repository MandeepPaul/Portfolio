/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-wheel": "spin 40s ease-in-out infinite",
        "spin-spokes": "spin-spokes 40s ease-in-out infinite",
        "scale-element": "scaler 40s ease-in-out infinite",
      },
      keyframes: {
        "spin-wheel": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-spokes": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        scaler: {
          "0%": { scale: 2.15 },
          "13.3%": { scale: 2.15 },
          "26.5%": { scale: 0.85 },
          "46.3%": { scale: 0.25 },
          "66.1%": { scale: 0.25 },
          "85.9%": { scale: 0.85 },
          "100%": { scale: 1.15 },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primaryFont: ["Roboto", "Dosis", "Playpen Sans"],
        headingFont: ["Montserrat Alternates", "sans-serif"],
        headingFont2: ["Montserrat Subrayada", "sans-serif"],
        headingFont3: ["Acme", "sans-serif"],
      },
    },
  },
  plugins: [],
};
