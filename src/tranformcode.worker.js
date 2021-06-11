import generate from "@babel/generator";
import { parse } from "@babel/parser";

self.onmessage = (e) => {
    const source = e.data;
    const code = transform(source);
    // @ts-ignore
    self.postMessage(code);
};
function transform(sourcecode) {
    console.log(sourcecode);
    var ast = parse(sourcecode, {
        // parse in strict mode and allow module declarations
        sourceType: "module",

        plugins: [
            // enable jsx and flow syntax
            "jsx",
            "typescript",
        ],
    });
    var output = generate(
        ast,
        { comments: false }
        // { parse: parse }
        // { parse: Parser.extend(dynamicImport) }
    );
    console.log(output);
    return output.code;
}
