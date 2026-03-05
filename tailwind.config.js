/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0D12',
        void: '#06060A',
        champagne: '#C9A84C',
        ivory: '#FAF8F5',
        slate: '#2A2A35',
        grid: '#1A1A24',
      },
      fontFamily: {
        heading: ['"Inter"', 'sans-serif'],
        drama: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(201, 168, 76, 0.15)',
        'glow-lg': '0 0 40px rgba(201, 168, 76, 0.2)',
        'glow-accent': '0 0 60px rgba(201, 168, 76, 0.1), 0 0 120px rgba(201, 168, 76, 0.05)',
      },
    },
  },
  plugins: [],
}
