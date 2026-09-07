import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures assets load correctly on GitHub Pages (subpaths)
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Exposes server on local network (Wi-Fi)
    port: 5173,
  }
})
