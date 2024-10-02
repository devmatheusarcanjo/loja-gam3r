/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,css}', // Se você estiver usando a pasta 'app' (Next 13+)
    './src/**/*.{js,ts,jsx,tsx,css}', // Se você estiver usando a pasta 'src'
    './pages/**/*.{js,ts,jsx,tsx}', // Para arquivos de página
    './components/**/*.{js,ts,jsx,tsx}', // Para componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
