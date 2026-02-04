import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base debe apuntar a '/pruebas2/' para GitHub Pages en https://<usuario>.github.io/pruebas2/
export default defineConfig({
  base: '/pruebas2/',
  plugins: [react()]
})
