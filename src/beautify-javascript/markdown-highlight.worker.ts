//@ts-ignore
import hljs from "@/assetsutils/highlight.js";
self.onmessage = (e) => {
    const source = e.data;
    const code = transform(source);
    // @ts-ignore
    self.postMessage(code);
};
const prefix = `<pre><code class="language-javascript"> `;
const postfix = `</code></pre>`;
function transform(sourcecode: string) {
    console.log(sourcecode);
    const code = sourcecode;
    return prefix + hljs.highlight(code, { language: "js" }).value + postfix;
}
