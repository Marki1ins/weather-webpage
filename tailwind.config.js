/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      sky: "#38bdf8",
      white: "#ffffff",

      "gray-50": "#fdfdfd",
      "dark-blue": "#594cee",
      "medium-blue": "#5c54ed",
      "light-blue": "#8dd0f5",
    },
  },
  plugins: [],
};
