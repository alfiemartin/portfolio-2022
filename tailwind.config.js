module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px'
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
      height: {
        '100-accom': 'calc(100vh - 64px)'
      },
      boxShadow: {
        'left': '3px 5px 14px 5px rgb(0 0 0 / 58%)'
      }
    },
  },
  plugins: [],
}
