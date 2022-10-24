/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1.0" },
        },
        moveup: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          100: {
            opacity: "1.0",
            transform: "translateY(-100%)",
          },
        },
        movedown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          100: {
            opacity: "1.0",
            transform: "translateY(100%)",
          },
        },
      },
      animation: {
        fadein: "fadein 0.4s ease-in",
        moveup: "moveup 0.5s ease-in-out",
        movedown: "movedown 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};