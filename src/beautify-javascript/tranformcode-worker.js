self.onmessage = (e) => {
    const source = e.data;
    const code = transform(source);
    // @ts-ignore
    self.postMessage(code);
};
function transform(sourcecode) {
    // console.log(sourcecode);
    // var ast = parse(sourcecode, { sourceType: "module" });
    // var output = generate(
    //     ast,
    //     { comment: false }
    //     // { parse: parse }
    //     // { parse: Parser.extend(dynamicImport) }
    // );
    // console.log(output);
    const output = decomment(sourcecode, { tolerant: true });
    return output;
}
import decomment from "decomment";
