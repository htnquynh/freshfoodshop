module.exports = {
  purge: [
    './index.html', 
    './src/**/*.vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
      },
      colors: {
        dominant: '#FAF8FF',
        secondary: '#393939',
        gold: {
          100: '#FFF8E4',
          500: '#FFC928',
        },
        peach: {
          100: '#FEE6DD',
          300: '#FFC2B1',
          500: '#FD8B7C',
        },
        'aqua-blue': '#00F3D7',
        success: '#51E583',
        fail: '#FF6847',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
