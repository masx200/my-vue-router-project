export default function lashentextarea(eles) {
    // console.log(eles.outerHTML);
    requestAnimationFrame(function () {
        //   for (var value of eles) {
        const value = eles;
        var myptext = value;
        //  document.getElementById(value);

        var el = myptext;
        // textarea.scrollHeight = 60
        // textarea.style.height = "60px"
        // makeExpandingArea(textarea);
        if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
            // console.log(parseInt(el.style.height), el.scrollHeight);
            myptext.style.height = myptext.scrollHeight + 2 + "px";
            console.log("拉伸文本框", [
                parseInt(el.style.height),
                el.scrollHeight,
                myptext.outerHTML,
            ]);
        }
        //   }
    });
}
