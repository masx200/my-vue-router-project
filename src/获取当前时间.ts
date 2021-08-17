export function 获取当前时间() {
    return new Date().toString().slice(0, new Date().toString().indexOf("GMT"));
}
