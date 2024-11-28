/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html', // Если используется HTML файл в папке public
    './src/**/*.{js,jsx,ts,tsx}', // Путь для всех файлов в папке src (включая подкаталоги)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
