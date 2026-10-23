/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0d0d0f',
        charcoal: '#151519',
        carddark: '#1c1c22',
        gold: {
          light: '#f3e5ab',
          DEFAULT: '#d4af37',
          dark: '#aa8529',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

