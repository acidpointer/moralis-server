import { defineConfig, build } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['web3'] // <= The libraries that need shimming should be excluded from dependency optimization.
  },
  envPrefix: 'ENV_',
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id, module) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});