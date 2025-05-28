// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite';

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
  },
  ssr: {
    noExternal: ['nodemailer', 'googleapis', 'dotenv']
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      external: ['@sanity/client'],
      output: {
        manualChunks: {
          vendor: [
            'svelte',
            'svelte/internal',
            'svelte/store',
            'svelte/transition',
            'svelte/animate'
          ],
          email: ['nodemailer', 'googleapis', 'dotenv']
        }
      }
    }
  }
};

export default config;