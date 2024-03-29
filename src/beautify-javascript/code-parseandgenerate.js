// @ts-ignore
function createWorker() {
    return new Worker(new URL("./tranformcode-worker.js", import.meta.url), {
        type: "module",
    });
}
let worker;
function launchworker() {
    if (!worker) {
        worker = new createWorker();
    }
}
export function 关闭所有worker1() {
    worker?.terminate();
    worker = undefined;
}
export default function (sourcecode) {
    launchworker();
    return new Promise((resolve, rj) => {
        worker.onmessage = (e) => {
            resolve(e.data);
        };
        worker.postMessage(sourcecode);
        worker.onerror = (e) => {
            rj(new Error(e.message + " " + e.filename));
        };
    });
}
