// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: {
      strict: false
    },
    proxy: {
      '/.well-known/appspecific/com.chrome.devtools.json': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path) => ''
      }
    }
  },
  optimizeDeps: {
    exclude: ['@sveltejs/kit']
  }
};

export default config;