import { defineConfig } from 'vite';
import { resolve } from 'path';

// Multi-page app: every HTML page at the project root is a build entry
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'Login.html'),
        scanner: resolve(__dirname, 'Scanner.html'),
        analysis: resolve(__dirname, 'Analysis.html'),
        explanation: resolve(__dirname, 'Explanation.html'),
        user: resolve(__dirname, 'User.html'),
        code: resolve(__dirname, 'code.html'),
      },
    },
  },
});
