const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abel: ['Abel', ...defaultTheme.fontFamily.sans],
        bebas: ['Bebas Neue', ...defaultTheme.fontFamily.sans]
      },
      letterSpacing:{
        tight:'0.1rem',
        wide:'0.4rem'
      },
      colors:{
        /*purple and blue colors*/
        'slate_blue':'#6b66cd',
        'med_purple':'#896deb',
        'lavender':'#a796e8',
        'pastel_purple':'#c2a3fd',
        'lilac':'#cdb5ff'
      },
    },
  },
  plugins: [],
};
