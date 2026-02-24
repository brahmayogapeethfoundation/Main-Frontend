/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        pink: {
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
        },
        purple: {
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
        },
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        'blob-slow': 'blob 20s infinite ease-in-out',
      },
      blur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
