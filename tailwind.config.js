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
          50: '#eef1ff',
          100: '#dcdfff',
          200: '#c1c6ff',
          300: '#a1a5ff',
          400: '#7e81ff',
          500: '#6a5af9',
          600: '#5944e0',
          700: '#4a33b8',
          800: '#382787',
          900: '#1f164f',
          950: '#120c32',
        },
        wonder: {
          navy: '#0b1021',
          indigo: '#6a5af9',
          pink: '#ff7eb9',
          cyan: '#5ddcff',
          orange: '#ffb74a',
          teal: '#38f0b8',
          slate: '#14192e',
        },
      },
      boxShadow: {
        glow: '0 20px 70px rgba(106, 90, 249, 0.28)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}

