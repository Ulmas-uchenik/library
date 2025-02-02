/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#4056A1",
        'secondary': "#44318d",
        'thirdly': "#b294ff"
      }
    },
  },
  plugins: [],
}

