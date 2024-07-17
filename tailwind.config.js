/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'musgo': '#95BE9E',
        'blue-logo': '#94B9FF',
        'blue-2': '#6882B4'
      },
      boxShadow: {
        'custom': 'inset 0 2px 3px #94B9FF;',
      }
    },
    fontFamily: {
      'lato': ["Lato", 'sans-serif'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
  },
  plugins: [],
}

