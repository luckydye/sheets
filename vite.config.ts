import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Tauri expects a fixed dev port and leaves the terminal output alone.
const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [react()],
  // Prevent Vite from obscuring Rust errors during `tauri dev`.
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host ? { protocol: "ws", host, port: 1421 } : undefined,
    watch: {
      // Don't watch the Rust backend; Tauri handles that.
      ignored: ["**/src-tauri/**"],
    },
  },
  // Only env vars prefixed with these are exposed to the client.
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri uses a modern webview; target its supported ES features.
    target: "es2021",
    minify: !process.env.TAURI_DEBUG,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
});
