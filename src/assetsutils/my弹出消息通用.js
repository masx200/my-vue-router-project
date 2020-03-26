import $ from "jquery";
function guid() {
    return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
        c
    ) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function tanchu弹出消息通用(infotype) {
    // var id=Math.random()*100000000|0
    var textinfo;
    switch (infotype) {
        case "success":
            textinfo = "成功";
            break;
        case "primary":
            textinfo = "首选";
            break;
        case "danger":
            textinfo = "失败";
            break;
        case "warning":
            textinfo = "警告";
            break;
        default:
            return;
    }
    var id = guid();
    // console.log($("[data-tanchuxiaoxi]"));
    $("[data-tanchuxiaoxi]").remove();
    jQuery("#my导航栏").append(
        jQuery(`<div id="${id}" class="alert alert-${infotype} alert-dismissible fade show" data-tanchuxiaoxi>
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>${textinfo}!</strong> 操作${textinfo}提示信息。
    </div>`).fadeTo(5000, 0.5, () => {
            // console.log(jQuery("#" + id));
            jQuery("#" + id).remove();
            $("#my主体").css("padding-top", $("#my导航栏").height());
            //   refreshall();
        })
    );
}
const jQuery = $;
export default tanchu弹出消息通用;
