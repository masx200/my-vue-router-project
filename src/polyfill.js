import importScripts from "./importscripts";

if (typeof Proxy !== "function") {
    importScripts(
        "https://cdn.jsdelivr.net/npm/es6-proxy-polyfill@2.1.1/dist/es6-proxy-polyfill.min.js"
    );
}
