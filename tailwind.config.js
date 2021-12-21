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
        'playfair': ['Playfair Display'],
      },
      maxWidth: {
        'mobile': '18rem',
      },
      colors: {
        dominant: '#FAF9F5',
        secondary: '#392A23',
        gold: {
          100: '#FFF8E4',
          500: '#FFC928',
        },
        peach: {
          100: '#FEE6DD',
          300: '#FFC2B1',
          500: '#FD8B7C',
        },
        lime: '#97EA07',
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
