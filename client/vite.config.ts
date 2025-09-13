import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@components',
                replacement: fileURLToPath(new URL('./src/components', import.meta.url))
            },
            {
                find: '@pages',
                replacement: fileURLToPath(new URL('./src/pages', import.meta.url))
            },
        ]
    },
})
