/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ['Noto Sans KR', 'sans-serif']
      },
      colors: {
        'header-brown': '#424242',
        'header-yelow': '#efc863',
        'footer-background': '#e8e8e8'
      }
    }
  },
  plugins: []
}
