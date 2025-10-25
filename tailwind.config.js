/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adds your 'Inter' font
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // You can add your brand colors here
        orange: {
          400: '#fb923c',
          500: '#f97316',
        }
      },
      // Your animation keyframes
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-down': {
          from: { transform: 'translateY(-50px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-out',
        'sponsor-scroll': 'scroll 40s linear infinite',
      }
    },
  },
  plugins: [],
};
