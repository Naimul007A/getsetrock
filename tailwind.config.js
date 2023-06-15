/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        mainwidth: '1320px'
      },
      backgroundImage: {
        mainBanner: "url('@/assets/image/mainBanner.webp')",
        thumb: "url('@/assets/image/aurthohin-bg.png')"
      }
    }
  },
  plugins: []
}
