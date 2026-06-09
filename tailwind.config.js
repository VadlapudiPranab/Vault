/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vault: {
          black: "#030303",
          cyan: "#18C8FF",
          cyanDeep: "#00AEEF",
          orange: "#FF7A1A",
          line: "rgba(255,255,255,0.12)",
          soft: "rgba(255,255,255,0.68)"
        }
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        cyan: "0 0 44px rgba(24,200,255,0.18)",
        orange: "0 0 44px rgba(255,122,26,0.18)"
      }
    }
  },
  plugins: []
};
