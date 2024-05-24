/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Roboto Mono, monospace" }, // sans is the default font
    extend: {
      fontSize: { huge: ["80rem", { lineHeight: "1" }] },
      heigth: { screen: "100dvh" },
    },
  },
  plugins: [],
};

//The base config is in https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js which can be overwriten and extended in this file
