/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1597E4', // Replace with your primary color
        secondary: '#00FF00', // Replace with your secondary color
        error: '#D86161',
        white: '#ffffff',
        whiteSecond: '#FAFAFA',
        textPrimary: '#212121',
        grey1: '#e6e6e6',
        grey: '#7A7A7A',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: '#212121',
          },
        },
      }),
      button: {
        Primary: {
          bg: 'red',
          borderColor: 'currentColor',
          borderWidth: '2px',
          color: 'currentColor',
          '&:hover': {
            backgroundColor: 'currentColor',
            color: 'white',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
