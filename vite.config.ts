import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        svgr({
            include: '**/*.svg'
        }),
        react()
    ],
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src/app'),
            pages: path.resolve(__dirname, './src/pages'),
            widgets: path.resolve(__dirname, './src/widgets'),
            features: path.resolve(__dirname, './src/features'),
            entities_: path.resolve(__dirname, './src/entities_'),
            shared: path.resolve(__dirname, './src/shared')
        }
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000')
    }
})
