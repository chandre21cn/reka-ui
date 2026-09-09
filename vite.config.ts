import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        vue(),
        dts({
            tsconfigPath: './tsconfig.app.json',
            outDirs: './dist',
            entryRoot: './src',
            cleanVueFileName: true,
            exclude: [
                'node_modules', 
                'exp',
                'vite.config.ts'
            ]
        })
    ],
    build: {
        emptyOutDir: true,
        minify: true,
        cssCodeSplit: true,
        lib: {
            entry: './src/index.ts',
            name: 'MarsUI',
            formats: ['es', 'umd', 'cjs'],
            fileName: (format) => `index.${ format }.js`,
        },
        rollupOptions: {
            external: [
                'vue',
                'reka-ui', 
                'lucide-vue-next', 
                'vue-sonner', 
                'class-variance-authority',
            ],
            output: {
                globals: {
                    vue: 'Vue',
                }
            }
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    }
})
