/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
  animation: {
    shine: 'shine 1.5s ease-in-out',
  },
      colors: {
        primary: "#1E40AF", // Professional blue
        secondary: "#3B82F6", // Lighter blue
        background: "#F8FAFC", // Light gray background
        textPrimary: "#1F2937", // Dark gray
        textSecondary: "#6B7280", // Medium gray
      },
    },
  },
  plugins: [],
};
