import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
