/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: {
    files: [
      './public/**/*.{html,js}', // Ajusta esta ruta según la ubicación de tus archivos
      './src/**/*.{html,js}', // Si también tienes archivos en src que utilizan clases de Tailwind
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
