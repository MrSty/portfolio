const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const customColors={
  primary:'#071C21',
  secondary:'#153B44',
  terciary:'#2D6E7E',
  fourth:'#C6DE41',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: customColors,
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
