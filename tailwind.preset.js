module.exports = {
  theme: {
    extend: {
      colors: {
        neural: {
          green: "#00ff9c",
          cyan: "#00ffe1",
          bg: "#05070a",
          panel: "#0b0f14",
        },
        neon: {
          DEFAULT: "#00ff9c",
          cyan: "#00ffe1",
          blue: "#00e5ff",
        }
      },
      boxShadow: {
        'neon-green': "0 0 12px rgba(0, 255, 156, 0.4)",
        'neon-cyan': "0 0 12px rgba(0, 255, 225, 0.4)",
        'glass': "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        'glass-gradient': "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      }
    }
  },
  plugins: [],
};
