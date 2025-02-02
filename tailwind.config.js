// const withMT = require("@material-tailwind/react/utils/withMT");
 
//  module.exports = withMT({
//    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//    theme: {
//      extend: {},
//    },
//    plugins: [],
//  });
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        "dark-bg":"#141c2e",
        "dark-gray":"#1e2b48",
        "dark-blue":"#007afd"
       }

    },
  },
  plugins: [],
}