import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //need to add this on live site to make sure the assets are loaded correctly
  // base: '/',

  base: process.env.NODE_ENV === 'production' ? '/jessabach/' : '/',
  server: {
    middlewareMode: false,
    watch: {
      usePolling: true,
      interval: 100,
    },
    hmr: {
      host: 'localhost',
      port: 3000,
      protocol: 'ws',
    },
  },
})
