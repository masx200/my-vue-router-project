declare module "*.vue" {
    import { Component } from "vue";
    const component: Component;
    export default component;
}
declare module "*.worker.js" {
    const worker: () => Worker;
    export default worker;
}
declare module "*.svg" {
    const d: string;
    export default d;
}
declare module "*.png" {
    const d: string;
    export default d;
}
declare module "*.jpg" {
    const d: string;
    export default d;
}
