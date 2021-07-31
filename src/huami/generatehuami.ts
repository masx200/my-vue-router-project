//@ts-ignore
import { md5 } from "../assetsutils/md5";

export function generatehuami(password: string, key: string) {
    var md5one = md5(password, key);
    var md5two = md5(md5one, "snow");
    var md5three = md5(md5one, "kise");
    var rule = md5three.split("");
    var source = md5two.split("");
    for (var i = 0; i <= 31; i++) {
        if (Number.isNaN(Number(source[i]))) {
            var str = "sunlovesnow1990090127xykab";
            if (str.search(rule[i]) > -1) {
                source[i] = source[i].toUpperCase();
            }
        }
    }
    var code32 = source.join("");
    var code1 = code32.slice(0, 1);
    var code16;
    if (Number.isNaN(Number(code1))) {
        code16 = code32.slice(0, 16);
    } else {
        code16 = "K" + code32.slice(1, 16);
    }
    return code16;
}
