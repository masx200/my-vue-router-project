// import prettier from "prettier/esm/standalone.mjs";
// import parserbabel from "prettier/esm/parser-babel.mjs";
// importScripts("https://unpkg.zhimg.com/prettier@2.3.1/standalone.js");
// importScripts("https://unpkg.zhimg.com/prettier@2.3.1/parser-babel.js");
import parserbabel from "@/assetsutils/prettier/parser-babel.js";
import prettier from "@/assetsutils/prettier/standalone.js";
import prettierconfig from "./prettierconfig.json";
const prettierPlugins = [parserbabel];
console.log(prettier, prettierPlugins);
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
                // plugins: [parserbabel],
                plugins: prettierPlugins,
            },
            prettierconfig
        )
    );
    return output;
}
