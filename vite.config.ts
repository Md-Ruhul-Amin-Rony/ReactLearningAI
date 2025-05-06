import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const repoName = 'ReactLearningAI';

export default defineConfig({
  base: `/${repoName}/`, 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
