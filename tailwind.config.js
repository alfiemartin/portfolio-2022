module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      height: {
        '100-accom': 'calc(100vh - 64px)'
      }
    },
  },
  plugins: [],
}
