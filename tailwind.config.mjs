/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5', // Blue
        secondary: '#4CAF50', // Green
        accent: '#FF9800', // Orange
        neutral: '#B0BEC5', // Gray
        background: '#FFFFFF', // White
      },
    },
  },
  plugins: [],
}; 
