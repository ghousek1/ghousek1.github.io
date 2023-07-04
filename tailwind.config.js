/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      monospace: ['Roboto Mono', 'monospace'],
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      handy:["Great Vibes", "cursive"]
    },
    screens: {
      'below-md': "860px",
    }
  },
  },
  plugins: [],
}
