import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import postcss from './postcss.config.cjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss,
  },
});
