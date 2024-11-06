/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
        },
        text: {
          DEFAULT: '#495566',
          dark: '#1E293B',
          light: '#99a9bf',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #2563EB, #3B82F6)',
      },
    },
  },
  plugins: [],
};
