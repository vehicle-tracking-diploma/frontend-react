/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#111827',
        'my-blue-hover': '#374151',
      },
    },
  },
  plugins: [],
}

