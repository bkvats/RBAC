/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /^bg-(red|blue|green|yellow|purple|pink|orange|teal|indigo|amber|cyan|lime|fuchsia|rose|sky|violet)-400$/,
    },
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: "class"
}