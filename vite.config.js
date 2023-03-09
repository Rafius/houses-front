import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import macrosPlugin from "vite-plugin-babel-macros";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: {
    open: "http://localhost:3000/"
  },
  plugins: [react(), reactRefresh(), macrosPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
