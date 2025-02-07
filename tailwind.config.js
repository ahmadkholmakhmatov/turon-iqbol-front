/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        franie: ["Franie", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "green-900": "#084C2E",
        "green-800": "#095C37",
        "green-700": "#087443",
        "green-600": "#099250",
        "green-500": "#16b364",
        "green-400": "#3CCB7F",
        "green-300": "#73E2A3",
        "green-50": "#EDFCF2",
        "gray-900": "#101828",
        "gray-600": "#475467",
        "gray-200": "#EFEFEF",
        "gray-100": "#F2F4F7",
        "gray-50": "#F9FAFB",
      },
    },
  },
  plugins: [],
};
