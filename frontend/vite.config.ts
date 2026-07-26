import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    nodePolyfills({
      protocolImports: true,
    })
  ],
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: [
      'pouchdb',
      'pouchdb-authentication',
      'pouchdb-find',
      'relational-pouch',
      'pouchdb-adapter-memory',
      'pouchdb-quick-search'
    ]
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'framer-motion'],
          pouch: ['pouchdb', 'pouchdb-find', 'pouchdb-authentication']
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: /^\.\/events$/, replacement: 'events' }
    ]
  },
  define: {
    global: 'window',
  }
});
