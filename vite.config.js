import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project-site base for GitHub Pages. For a custom domain at the apex,
// change this to '/' and redeploy. See README.
export default defineConfig({
  plugins: [react()],
  base: '/Precision-Cabling-Automation-Website/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
