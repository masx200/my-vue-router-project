import asynchighlighttext from "./async-highlight-js-text.js";
import codeparseandgenerate from "./code-parseandgenerate.js";

export async function transformall(input) {
    const code = await codeparseandgenerate(input);
    return await asynchighlighttext(code);
}
