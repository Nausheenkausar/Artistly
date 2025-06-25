
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- this line is important
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
