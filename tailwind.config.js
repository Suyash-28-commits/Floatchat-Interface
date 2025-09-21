/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0B1220',
        'card-bg': '#121A2C',
        'neon-cyan': '#00E5FF',
        'aqua': '#2BD3C6',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}