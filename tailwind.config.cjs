const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neo-bg': '#04060b',
        'neo-surface': '#0b0f14',
        'neo-glass': 'rgba(12, 16, 24, 0.65)',
        'neo-border': '#0f1b2d',
        'neo-accent': '#20f6b8',
        'neo-accent-strong': '#00ff9c',
        'neo-magenta': '#ff4bd8',
        'neo-cyan': '#34d8ff',
        'neo-amber': '#f2b93b',
        'neo-muted': '#8aa2c2',
        'neo-text': '#e5f0ff',
        slate: colors.slate,
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,255,156,0.35)',
        'glow-strong': '0 0 32px rgba(0,255,156,0.6)',
        panel: '0 30px 120px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        'neo-md': '12px',
        'neo-lg': '18px',
        'neo-xl': '28px',
      },
      spacing: {
        'neo-1': '6px',
        'neo-2': '10px',
        'neo-3': '14px',
        'neo-4': '18px',
        'neo-5': '24px',
        'neo-6': '32px',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 rgba(0,255,156,0.0)' },
          '50%': { boxShadow: '0 0 30px rgba(0,255,156,0.55)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.6s ease-in-out infinite',
        'float-soft': 'float-soft 6s ease-in-out infinite',
      },
      backdropBlur: {
        12: '12px',
        20: '20px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.neo-glass': {
          background: 'var(--neo-glass, rgba(12,16,24,0.65))',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.05)',
        },
        '.neo-border': {
          borderColor: 'rgba(255,255,255,0.08)',
        },
      });
    },
  ],
};
