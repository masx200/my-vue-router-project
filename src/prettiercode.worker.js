import prettier from "prettier/esm/standalone.mjs";
import parserbabel from "prettier/esm/parser-babel.mjs";
import prettierconfig from "./prettierconfig.json";
self.onmessage = (e) => {
    const source = e.data;
    const code = transform(source);
    // @ts-ignore
    self.postMessage(code);
};
function transform(code) {
    console.log(code);
    var output = prettier.format(
        code,
        Object.assign(
            {
                parser: "babel-ts",
                plugins: [parserbabel],
            },
            prettierconfig
        )
    );
    return output;
}
