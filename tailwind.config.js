/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#ffffff",
          gray: "#2e2e2e",
          black: "#000000",
          orange: "#ff6a00"
        }
      }
    }
  },
  plugins: []
}
