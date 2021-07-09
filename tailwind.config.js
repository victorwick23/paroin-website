module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'basic':['Quicksand', 'sans-serif']
      },
      colors:{
        blueTheme: '#1A8FE3',
        redTheme: '#FF4D80',
      },
      backgroundImage: {
        'backgroundForm': "url('/background.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
