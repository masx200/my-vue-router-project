import $ from "jquery";

export function 调整导航栏和主体的距离() {
    requestAnimationFrame(() => {
        $(".my主体").css("padding-top", $(".my导航栏").height() || 0);
    });
    let timer = setInterval(() => {
        $(".my主体").css("padding-top", $(".my导航栏").height() || 0);
        //console.log($(".my导航栏").height());
    }, 0);
    setTimeout(() => {
        $(".my主体").css("padding-top", $(".my导航栏").height() || 0);
        //console.log($(".my导航栏").height());
        clearInterval(timer);
    }, 1000);
}
