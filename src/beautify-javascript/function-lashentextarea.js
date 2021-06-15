export default function lashentextarea(eles) {
    requestAnimationFrame(function () {
        const value = eles;
        var myptext = value;
        var el = myptext;
        if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
            myptext.style.height = myptext.scrollHeight + 2 + "px";
            console.log("拉伸文本框", [
                parseInt(el.style.height),
                el.scrollHeight,
                myptext.outerHTML,
            ]);
        }
    });
}
