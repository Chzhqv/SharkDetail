import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// No need to import tailwindcss here anymore

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Remove tailwindcss() from here
  ],
})
