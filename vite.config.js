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
    noExternal: ['nodemailer', 'googleapis', 'dotenv', '@sanity/client']
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'svelte',
            'svelte/internal',
            'svelte/store',
            'svelte/transition',
            'svelte/animate'
          ],
          email: ['nodemailer', 'googleapis', 'dotenv'],
          sanity: ['@sanity/client', '@sanity/image-url']
        }
      }
    }
  }
};

export default config;