import importScripts from "./importscripts";
if (process.env.NODE_ENV === "production") {
    if (typeof window !== "undefined") {
        if (typeof ResizeObserver !== "function") {
            importScripts(
                "https://polyfill.io/v3/polyfill.min.js?features=ResizeObserver"
            );
        }
    }
}
