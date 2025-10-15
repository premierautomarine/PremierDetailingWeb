import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/PremierDetailingWeb/",
  plugins: [react()],
  build: {
    rollupOptions: { output: { manualChunks: undefined } },
  },
});
