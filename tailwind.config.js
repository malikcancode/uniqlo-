/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "sans-serif"],
      },
    },
  },
  plugins: [
    // Add any plugins here if you need them
  ],
};
