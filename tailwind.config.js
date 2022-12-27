/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      // 自訂顏色
      colors: {
        primary: '#907A7B',
        secondary: '#C0A4A5',
        light: '#F5F0E7',
        dark: '#707070'
      }
    },
    container: {
      center: true,
      screens: {
        '2xl': '1280px'
      },
      padding: {
        DEFAULT: '12px'
      }
    }
  },
  plugins: []
}
