import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "node:fs": "browserfs",
      "node:path": "path-browserify",
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api/ollama": {
        target: "http://localhost:11434",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/ollama/, ""),
      },
    },
  },
});
