import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as tokenami from '@tokenami/unplugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tokenami.vite({ output: './src/tokenami.css' }), react()],
});
