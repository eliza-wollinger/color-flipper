import { defineConfig } from "vite";

export default defineConfig({
    base: "/color-flipper/",
    build: {
        modulePreload: {
            polyfill: false
        },
        rollupOptions: {
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]"
            }
        }
    }
})