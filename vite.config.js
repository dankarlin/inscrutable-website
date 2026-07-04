import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          bootstrap: ['bootstrap']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: true,
    cssCodeSplit: true,
    target: 'es2015'
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})