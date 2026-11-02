import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' sirve para que el sitio funcione al publicarlo en GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
