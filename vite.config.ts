import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// With a custom domain, use root base:
export default defineConfig({
  base: '/',
  plugins: [react()]
})
