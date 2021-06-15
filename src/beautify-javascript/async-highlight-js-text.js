// @ts-ignore
import 弹出消息通用 from "@/assetsutils/my弹出消息通用.js";
import Worker from "./markdown-highlight.worker.js";
let worker;
function launchworker() {
    if (!worker) {
        worker = new Worker();
    }
}
export function 关闭所有worker2() {
    worker?.terminate();
    worker = undefined;
}
export default async (input) => {
    launchworker();
    let output;
    try {
        // var code = await codeparseandgenerate(input);
        const text = input;
        output = await new Promise((resolve, rj) => {
            worker.onmessage = (e) => {
                resolve(e.data);
            };
            worker.postMessage(text);
            worker.onerror = (e) => {
                rj(new Error(e.message + " " + e.filename));
            };
        });
        console.log(output);
        弹出消息通用("success");
    } catch (error) {
        console.error(error);
        弹出消息通用("danger");
        throw Error(error);
    }
    return output;
};
