import { resolve } from 'path'  /* node */
// https://vite.dev/config/
// https://vite.dev/config/shared-options.html#css-devsourcemap
// https://vite.dev/guide/build.html#multi-page-app
export default {
    // config options
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html')
        }
    }
}