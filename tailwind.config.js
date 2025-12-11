/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#b5d9ff',
          300: '#83bdff',
          400: '#4996ff',
          500: '#1f74ff',
          600: '#0b5dea',
          700: '#0a4ac0',
          800: '#0d4099',
          900: '#113776',
          950: '#0b2247',
        },
      },
      boxShadow: {
        glow: '0 20px 70px rgba(79, 70, 229, 0.25)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}

