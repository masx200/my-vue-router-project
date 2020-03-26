// import marked from "./assetsutils/marked.min.js";
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
    //   const marktext = marked(sourcecode);
    console.log(sourcecode);
    /* <pre><code class="language-javascript"> */
    /* </code></pre> */
    return prefix + hljs.highlightAuto(sourcecode).value + postfix;
}
/* function unescape(value) {
  console.log(value);
  return value
    .replace(new RegExp("&amp;", "g"), "&")
    .replace(new RegExp("&lt;", "g"), "<")
    .replace(new RegExp("&gt;", "g"), ">");
}
 */
