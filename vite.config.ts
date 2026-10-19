import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        contact: new URL('./iletisim/index.html', import.meta.url).pathname,
        about: new URL('./hakkimizda/index.html', import.meta.url).pathname,
        fyy: new URL('./fyy-nedir/index.html', import.meta.url).pathname,
      },
    },
  },
});
