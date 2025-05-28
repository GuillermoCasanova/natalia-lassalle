// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: {
      strict: false
    }
  },
  optimizeDeps: {
    include: ['@sanity/client', '@sanity/image-url'],
    exclude: ['@sveltejs/kit']
  },
  ssr: {
    noExternal: ['nodemailer', 'googleapis', 'dotenv']
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
          email: ['nodemailer', 'googleapis', 'dotenv']
        }
      }
    }
  }
};

export default config;