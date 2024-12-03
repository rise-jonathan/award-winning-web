import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/award-winning-web/',
    build: {
        outDir: 'build'
    }
});
