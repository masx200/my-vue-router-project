import hljs from "./assetsutils/highlight.js";
self.onmessage = (e) => {
    const source = e.data;
    const code = transform(source);
    // @ts-ignore
    self.postMessage(code);
};
const prefix = `<pre><code class="language-javascript"> `;
const postfix = `</code></pre>`;
function transform(sourcecode) {
    console.log(sourcecode);
    return prefix + hljs.highlightAuto(sourcecode).value + postfix;
}
