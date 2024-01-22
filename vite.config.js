import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

let PORT = process.env.PORT || 3000;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
    open: true
  }
})
