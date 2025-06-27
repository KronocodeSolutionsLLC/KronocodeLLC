/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c7e0ff',
          300: '#a0caff',
          400: '#75a8ff',
          500: '#4e83fb',
          600: '#3865f3',
          700: '#2d51e0',
          800: '#2744b9',
          900: '#253c93',
        },
        secondary: {
          50: '#fff8f0',
          100: '#ffe9d1',
          200: '#ffd2a8',
          300: '#ffb673',
          400: '#ff903d',
          500: '#ff6d13',
          600: '#f54c06',
          700: '#cc3507',
          800: '#a12a0f',
          900: '#7e2610',
        },
        navy: {
          50: '#f0f3f9',
          100: '#dbe1f0',
          200: '#bcc8e0',
          300: '#93a6c9',
          400: '#6a82b0',
          500: '#4d6595',
          600: '#3e4f7a',
          700: '#334064',
          800: '#2c3553',
          900: '#1e2235',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'brand-start': '#ff6d13',
        'brand-end': '#3865f3',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};