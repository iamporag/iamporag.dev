/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "from-sky-400",
    "to-blue-600",
    "from-blue-500",
    "to-indigo-600",
    "from-cyan-400",
    "to-blue-500",
    "from-teal-400",
    "to-emerald-500",
    "from-orange-400",
    "to-red-500",
    "from-purple-500",
    "to-pink-500",
  ],
  plugins: [],
}

