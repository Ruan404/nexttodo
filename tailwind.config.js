/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--bg-1)",
        "secondary": "var(--bg-2)",
        "tertiary": "var(--bg-3)",
        "shadow": "var(--bg-4)",
        "text": "rgb(var(--fg-1) / <alpha-value>)",
        "svg-btn": "var(--fg-2)",
        "svg-btn-hover": "var(--fg-3)",
        "focus-1": "var(--blue-2)",
        "focus-2": "var(--blue-3)",
        "primary-btn": "var(--blue-2)",
        "primary-btn-hover": "var(--blue-1)",
        "checked": "var(--green)",
        "swith-theme": "rgb(var(--fg-1) / <alpha-value>)",
        "fg-btn": "#0c1011"
      },
    },
  },
  plugins: [],
  darkMode: "class",
  // ...
};
