import {
    generate,
    parse,
} from "@masx200/acorn-parse-escodegen-generate-esm-broweser";
self.onmessage = (e) => {
    const source = e.data;
    const code = transform(source);
    // @ts-ignore
    self.postMessage(code);
};
function transform(sourcecode) {
    console.log(sourcecode);
    var ast = parse(sourcecode, { sourceType: "module" });
    var code = generate(
        ast,
        { comment: false }
        // { parse: parse }
        // { parse: Parser.extend(dynamicImport) }
    );
    console.log(code);
    return code;
}
