/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4A7DFF',
        'brand-purple': '#8B5CF6',
        'brand-cyan': '#22D3EE',
        'brand-dark': '#0F172A',
        'brand-slate': '#1E293B',
        'brand-light': '#F7F8FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(74, 125, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(74, 125, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
