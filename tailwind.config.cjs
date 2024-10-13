/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald", "synthwave"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
