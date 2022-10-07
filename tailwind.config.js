/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'h1': ['4.3rem', '4.5rem'],
        'h2': ['3.583rem', '4rem'],
        'h3': ['2.986rem', '3.5rem'],
        'h4': ['2.488rem', '3rem'],
        'h5': ['2.074rem', '2.5rem'],
        'h6': ['1.728rem', '2rem'],
        'pxl': '1.44rem',
        'plg': '1.2rem',
        'pmd': '1rem',
        'psm': '0.833rem',
      },
      colors: {
        'verde': '#5BE9B9',
        'roxo': '#7510F7'
      },
      spacing: {
        '8%': '8%',
        '6%': '6%',
        '4%': '4%',
      },
      maxWidth: {
        'mobileImage': '280px',
      },
    },
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
