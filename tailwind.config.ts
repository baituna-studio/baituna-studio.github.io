/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {
      colors: {
        figma: {
          bg: '#F8F8F8',
          text: '#1E1E1E',
          border: '#1E1E1E',
        }
      }
    },
  },
  plugins: [],
}
