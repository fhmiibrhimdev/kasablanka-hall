/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: 'tw-',
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
}