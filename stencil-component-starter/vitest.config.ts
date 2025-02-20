import stencil from 'unplugin-stencil/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom', // Ensures DOM APIs like document are available
        globals: true,
    },
    plugins: [stencil()]
})