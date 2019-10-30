// @ts-ignore
import Worker from "./markdown-highlight.worker";
let worker;
function launchworker() {
  if (!worker) {
    worker = new Worker();
  }
}
// import marked /*  { parser } */ from "./assetsutils/marked.min.js";
import 弹出消息通用 from "./assetsutils/my弹出消息通用.js";
import codeparseandgenerate from "./code-parseandgenerate.js";
export default async input => {
  launchworker();
  let output;
  try {
    //   var ast = parse(
    //     this.input,

    //     { sourceType: "module" }
    //   );
    //   //   );
    //   var code = generate(ast);

    var code = await codeparseandgenerate(input);
    //     var text = `
    // \`\`\`javascript
    // ${code}
    // \`\`\`
    // `;
    const text = code;
    output = await new Promise((resolve, rj) => {
      worker.onmessage = e => {
        resolve(e.data);
      };
      worker.postMessage(text);

      worker.onerror = e => {
        // for (var key in e) {
        //     console.error(key, e[key])
        // }
        // console.error(e.message)
        //   console.error("Error:", e.message, e.filename);
        //   arr[index].terminate();
        //   $("#tp2-big").val("Error:" + e.message+" "+e.filename);
        //   throw e;
        rj(new Error(e.message + " " + e.filename));
      };
      // });
    });
    console.log(output);
    // const divele = document.createElement("div");

    // $(ref.current).html(marked(text));
    /* 使用jquery的漏洞,如果内容包括html标签的话,当前网页会被覆盖 */

    // const diveleinnerHTML = marked(text);

    /* Array.from(divele.querySelectorAll("pre code")).forEach(block =>
      hljs.highlightBlock(block)
    ); */

    // var output = divele.innerHTML;
    // console.log(divele.innerHTML);
    // constants
    弹出消息通用("success");
  } catch (error) {
    console.error(error);
    弹出消息通用("danger");
    throw Error(error);
  }
  return output;
};
