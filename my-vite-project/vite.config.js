// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import ReactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://your-backend-server.com',
    },
  },
  // ...otras configuraciones de Vite
})
