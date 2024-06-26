/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        interTight: ["Inter Tight", "sans-serif"],
        clashDisplay: ["Clash Display", "sans-serif"],
        GeneralSans: ["General Sans", "Inter", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
