import { 关闭所有worker2 } from "./async-highlight-js-text.js";
import { 关闭所有worker1 } from "./code-parseandgenerate.js";
import lashentextarea from "./function-lashentextarea.js";
import { transformall } from "./transformallcode.js";
import { 关闭所有worker3 } from "./work-code-prettier.js";
import { 调整导航栏和主体的距离 } from "./调整导航栏和主体的距离";
export default {
    name: "beautifyjvascript",
    data() {
        return {
            disablebutton: false,
            分屏状态: "上下分屏",
            input: "",
            模式左右: true,
            绑定宽样式: "col-xl-6 col-lg-6 col-md-6",
            绑定窄样式: "col-xl-12 col-lg-12 col-md-12",
        };
    },
    methods: {
        clearcode() {
            this.$refs.输入框.style.height = "50px";
            this.input = "";
            this.$refs.输出框.innerHTML = "";
        },
        切换左右分屏() {
            this.模式左右 = !this.模式左右;
            this.分屏状态 =
                "上下分屏" === this.分屏状态 ? "左右分屏" : "上下分屏";
            this.拉伸文本框();
        },
        transformcode() {
            //alert("transformcode")
            this.disablebutton = true;
            transformall(this.input)
                .then((output) => {
                    this.$refs.输出框.innerHTML = output;
                    //    alert(output);
                })
                .catch((e) => {
                    var errtxt = String(e) + "\n" + e.stack;

                    this.$refs.输出框.innerText = errtxt;
                    alert(errtxt);
                    throw e;
                })
                .finally(() => {
                    this.disablebutton = false;
                    this.$refs.detail1.open = false;
                    this.$refs.detail2.open = true;
                    if (this.分屏状态 == "上下分屏") {
                        this.切换左右分屏();
                    }
                });
        },
        拉伸文本框() {
            const 上下分屏 = () => {
                this.模式左右 = false;
                this.分屏状态 = "左右分屏";
            };
            lashentextarea(this.$refs.输入框);
            requestAnimationFrame(() => {
                if (this.$refs.detail1.open && !this.$refs.detail2.open) {
                    上下分屏();
                }
                if (!this.$refs.detail1.open && this.$refs.detail2.open) {
                    上下分屏();
                }
            });
        },
    },
    watch: {
        input() {
            lashentextarea(this.$refs.输入框);
        },
    },
    mounted() {
        document.title = "美化JavaScript代码";
        window.addEventListener("resize", this.拉伸文本框);
        //console.log($("#my导航栏").height());
        调整导航栏和主体的距离();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.拉伸文本框);
        关闭所有worker1();
        关闭所有worker2();
        关闭所有worker3();
    },
};
