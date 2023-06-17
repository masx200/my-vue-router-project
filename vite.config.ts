import { createHtmlPlugin } from "vite-plugin-html";
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
    worker: { format: "es" },
    resolve: {
        alias: {
            "@": path.join(__dirname, "src/"),
            // react: "preact/compat",
            // "react-dom/test-utils": "preact/test-utils",
            // "react-dom": "preact/compat", // 必须放在 test-utils 下面
            // "react/jsx-runtime": "preact/jsx-runtime",
        },
    },
    plugins: [
        vue(),

        createHtmlPlugin({
            minify: true,
            template: "./public/index.html",
            entry: "./src/index.ts", // 这个会帮我们注入入口 js 文件
            inject: {
                // data: {
                //     // 这是我们 index.html 用到的环境变量
                //     ...env,
                // },
            },
        }),
    ],
});
