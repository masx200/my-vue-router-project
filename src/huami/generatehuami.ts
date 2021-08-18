import fpCode from "flowerpassword.js";

export function generatehuami(password: string, key: string) {
    return fpCode(password, key, 16);
}
