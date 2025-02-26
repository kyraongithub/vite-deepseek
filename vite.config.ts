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
});
