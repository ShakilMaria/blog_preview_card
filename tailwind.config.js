/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      figtree: [ "Figtree", 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'pYellow': 'hsl(47, 88%, 63%)',
      'pWhite': 'hsl(0, 0%, 100%)',

      'Gray500': 'hsl(0, 0%, 42%)',
       'Gray950': 'hsl(0, 0%, 7%)'
    },
    extend: {
      boxShadow: {
        '3xl': '5px 5px  ',
      }
    },
  },
  plugins: [],
}

