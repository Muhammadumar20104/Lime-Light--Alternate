/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans JP', sans-serif",
        display: "Noto Serif Display', serif",
      }
    },
  },
  plugins: [],
})

