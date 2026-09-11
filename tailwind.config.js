/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc',
        foreground: '#003763',
        card: '#ffffff',
        'card-foreground': '#003763',
        border: 'rgba(0, 55, 99, 0.12)',
        input: 'rgba(0, 55, 99, 0.18)',
        primary: '#003763',
        'primary-foreground': '#ffffff',
        secondary: '#f1f1f1',
        'secondary-foreground': '#003763',
        muted: '#f1f1f1',
        'muted-foreground': '#475569',
        accent: '#00b3f0',
        'accent-foreground': '#ffffff',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        display: ['system-ui', 'sans-serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
