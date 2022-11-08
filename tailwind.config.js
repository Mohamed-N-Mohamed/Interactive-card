/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-white': ' hsl(270, 3%, 87%)',
        'Light-grayish-violet': 'hsl(270, 3%, 87%)',
        'Dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'Very-dark-violet': 'hsl(278, 68%, 11%)',

      },
    },
  },
  plugins: [],
}
