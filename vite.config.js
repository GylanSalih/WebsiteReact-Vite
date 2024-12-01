import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Optional: öffnet den Browser automatisch, wenn der Server startet
  },
  build: {
    assetsDir: 'assets', // Standardverzeichnis für statische Assets
  },
  publicDir: 'public', // Der Ordner für statische Dateien (standardmäßig 'public')#
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.svg'],
});
