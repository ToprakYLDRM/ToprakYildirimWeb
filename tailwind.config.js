/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005A9C', // Professional Navy Blue
          dark: '#004080',
        },
        dark: {
          DEFAULT: '#1A1A1A', // Dark Anthracite
          light: '#2A2A2A',
        },
        light: {
          DEFAULT: '#F8F9FA', // Light Grey
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
