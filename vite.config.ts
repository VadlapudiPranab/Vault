import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        privacy: "./privacy-policy/index.html",
        privacyClean: "./privacy-policy.html",
        terms: "./terms-of-service/index.html",
        termsClean: "./terms-of-service.html",
      },
    },
  },
});
