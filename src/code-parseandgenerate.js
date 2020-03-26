// @ts-ignore
import Worker from "./tranformcode.worker";
// import generate from "@babel/generator";
//   // parse,
//   generate
//   //   Parser
// import { generate, parse } from "acorn-parse-escodegen-generate-esm-broweser";
// import dynamicImport from "acorn-dynamic-import";
// import { Parser } from "acorn";
// // console.log(Parser.extend(dynamicImport));
// import jsx from "acorn-jsx";
// import { parse } from "esprima";
// console.log(parseModule);
// console.log(esprima);
// import { generate } from "escodegen";
// import { parse } from "@babel/parser";
let worker;
function launchworker() {
    if (!worker) {
        worker = new Worker();
    }
}
export default function (sourcecode) {
    launchworker();
    return new Promise((resolve, rj) => {
        worker.onmessage = (e) => {
            resolve(e.data);
        };
        worker.postMessage(sourcecode);

        worker.onerror = (e) => {
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
    //   var ast = Parser.extend(dynamicImport)
    //     .extend(jsx())
    //     .parse(sourcecode, { sourceType: "module" });
    //   console.log(
    //     Parser.extend(dynamicImport).parse(sourcecode, { sourceType: "module" })
    //   );
    /* var ast = parse(sourcecode, { sourceType: "module" });
  console.log(ast);

  var code = generate(
    ast,
    { comment: false }
    // { parse: parse }
    // { parse: Parser.extend(dynamicImport) }
  );
  console.log(code);
  return code; */
}
