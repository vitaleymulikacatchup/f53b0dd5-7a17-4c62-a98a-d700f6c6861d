/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#2a2a2a',
        'darker-bg': '#1e1e1e',
        'card-bg': '#3a3a3a',
        'blue-accent': '#4a90e2',
        'green-accent': '#5cb85c',
        'purple-accent': '#8e44ad',
        'orange-accent': '#f39c12',
        'red-accent': '#e74c3c',
        'cyan-accent': '#17a2b8',
        'pink-accent': '#e91e63',
        'yellow-accent': '#ffc107',
        'teal-accent': '#20c997',
        'indigo-accent': '#6610f2'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}