window.addEventListener("error", fn1);
window.addEventListener("unhandledrejection", fn2);

function fn1(e) {
    const { error } = e;
    alert(String(error) + "\n" + error.stack);
}

function fn2(e) {
    const { reason } = e;
    alert(String(reason) + "\n" + reason.stack);
}
