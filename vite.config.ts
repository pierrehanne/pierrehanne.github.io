import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // For username.github.io repos, root ("/") is correct
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Copy index.html to 404.html for SPA routing on GitHub Pages
    {
      name: "spa-fallback",
      closeBundle() {
        const dist = path.resolve(__dirname, "dist");
        const index = path.join(dist, "index.html");
        const notFound = path.join(dist, "404.html");

        if (fs.existsSync(index)) {
          fs.copyFileSync(index, notFound);
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-slot", "@radix-ui/react-toast"],
        },
      },
    },
    sourcemap: mode === "development",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: mode === "production",
        drop_debugger: mode === "production",
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react"],
  },
}));
