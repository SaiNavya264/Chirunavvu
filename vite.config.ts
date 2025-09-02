import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Chirunavvu/",   // 👈 matches your repo name exactly
})
