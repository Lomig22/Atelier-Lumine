module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#fafafa',
        neon: {
          pink: '#ff5bf5',
          blue: '#4deaff',
          purple: '#a36bff',
          green: '#6bffb5',
          yellow: '#fff36b',
          red: '#ff6b6b'
        }
      },
      boxShadow: {
        neon: '0 0 10px rgba(255,255,255,0.08), 0 0 40px rgba(255, 91, 245, 0.35)'
      }
    }
  },
  plugins: []
}
