import { generate, parse } from "acorn-parse-escodegen-generate-esm-broweser";
onmessage = e => {
  const sourcecode = e.data;
  console.log(sourcecode);
  var ast = parse(sourcecode, { sourceType: "module" });
  var code = generate(
    ast,
    { comment: false }
    // { parse: parse }
    // { parse: Parser.extend(dynamicImport) }
  );
  console.log(code);
  postMessage(code);
};
