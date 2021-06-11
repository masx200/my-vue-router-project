import asynchighlighttext from "./async-highlight-js-text.js";
import codeparseandgenerate from "./code-parseandgenerate.js";
import workcodeprettierjs from "./work-code-prettier.js";

export async function transformall(input) {
    const code = await codeparseandgenerate(input);

    return await asynchighlighttext(await workcodeprettierjs(code));
}
