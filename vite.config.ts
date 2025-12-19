import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/iamporag.dev/", // GitHub repo name
  plugins: [react()],
})
