import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` must match your GitHub repo name so assets load on GitHub Pages:
// https://trazonagamalielarlijun05-arch.github.io/portfolioupgrade/
export default defineConfig({
  plugins: [react()],
  base: '/portfolioupgrade/',
});
