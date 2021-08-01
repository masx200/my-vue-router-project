declare module "*.vue" {
    import { Component } from "vue";
    const component: Component;
    export default component;
}
declare module "*.worker.js" {
    const worker: () => Worker;
    export default worker;
}
