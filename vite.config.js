import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                p1: resolve(__dirname, '01-background-color-changer/index.html'),
                p2: resolve(__dirname, '02-popup-notification/index.html'),
                p3: resolve(__dirname, '03-countdown-timer/index.html'),
                p4: resolve(__dirname, '04-dark-mode-toggle/index.html'),
                p5: resolve(__dirname, '05-calculator/index.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    }
});
