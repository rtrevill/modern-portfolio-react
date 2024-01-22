import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://rtrevill-modern-portfolio-09375a52d946.herokuapp.com/',
  plugins: [react()],
  // server: {
  //   port: 3000,
  //   open: true
  // }
})
