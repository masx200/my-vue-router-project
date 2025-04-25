// import prettier from "prettier/esm/standalone.mjs";
// import parserbabel from "prettier/esm/parser-babel.mjs";
// importScripts("https://unpkg.zhimg.com/prettier@2.3.1/standalone.js");
// importScripts("https://unpkg.zhimg.com/prettier@2.3.1/parser-babel.js");
import parserbabel from "@/assetsutils/prettier/parser-babel.js";
import prettier from "@/assetsutils/prettier/standalone.js";
import prettierconfig from "./prettierconfig.json";
import prettierestree from "prettier/plugins/estree.mjs";

const prettierPlugins = [parserbabel, prettierestree];

self.addEventListener("unhandledrejection", fn2);
function fn2(e) {
    console.error("unhandledrejection", e);

    throw e.reason;
}
//console.log(prettier, prettierPlugins);
self.onmessage = async (e) => {
    const source = e.data;
    const code = await transform(source);

    console.log({ code });
    // @ts-ignore
    self.postMessage(code);
};
async function transform(code) {
    console.log({ code });
    var output = prettier.format(
        code,
        Object.assign(
            {
                parser: "babel-ts",
                // plugins: [parserbabel],
                plugins: prettierPlugins,
            },
            prettierconfig,
        ),
    );
    return output;
}
