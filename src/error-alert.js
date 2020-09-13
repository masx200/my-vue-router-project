window.addEventListener("error", fn1);
window.addEventListener("unhandledrejection", fn2);

function fn1(e) {
    const { error } = e;
    alert(String(error) + error.stack);
}

function fn2(e) {
    const { reason } = e;
    alert(String(reason) + reason.stack);
}
