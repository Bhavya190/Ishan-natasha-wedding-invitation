/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#f3e8ff',
        'light-pink': '#fce7f3',
        'light-red': '#fee2e2',
        'accent-purple': '#c084fc',
        'accent-pink': '#f472b6',
        'accent-red': '#fb7185',
        'deep-purple': '#4c1d95',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
