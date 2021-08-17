import "highlight.js/styles/github.css";
import { defineComponent } from "vue";
// import { 调整导航栏和主体的距离 } from "../调整导航栏和主体的距离";
//@ts-ignore
import { 关闭所有worker2 } from "./async-highlight-js-text.js";
//@ts-ignore
import { 关闭所有worker1 } from "./code-parseandgenerate.js";
//@ts-ignore
import lashentextarea from "./function-lashentextarea.js";
//@ts-ignore
import { transformall } from "./transformallcode.js";
//@ts-ignore
import { 关闭所有worker3 } from "./work-code-prettier.js";
export default defineComponent({
    name: "beautifyjvascript",
    data() {
        return {
            detailopen1: true,
            detailopen2: true,
            output: "",
            disablebutton: false,
            分屏状态: "上下分屏",
            input: "",
            模式左右: true,
            绑定宽样式: "col-xl-6 col-lg-6 col-md-6",
            绑定窄样式: "col-xl-12 col-lg-12 col-md-12",
        };
    },
    methods: {
        toggle1(e: Event) {
            // console.log(e);
            //@ts-ignore
            this.detailopen1 = e.target.open;
        },
        toggle2(e: Event) {
            // console.log(e);
            //@ts-ignore
            this.detailopen2 = e.target.open;
        },
        clearcode() {
            //@ts-ignore
            this.$refs.输入框.style.height = "50px";
            this.input = "";
            this.output = "";
            // this.$refs.输出框.innerHTML = "";
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
                .then((output: string) => {
                    // this.$refs.输出框.innerHTML = output;
                    this.output = output;
                    //    alert(output);
                })
                .catch((e: { stack: string }) => {
                    var errtxt = String(e) + "\n" + e.stack;
                    this.output = errtxt;
                    // this.$refs.输出框.innerText = errtxt;
                    alert(errtxt);
                    throw e;
                })
                .finally(() => {
                    this.disablebutton = false;
                    this.detailopen1 = false;
                    this.detailopen2 = true;
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
                if (this.detailopen1 && !this.detailopen2) {
                    上下分屏();
                }
                if (!this.detailopen1 && this.detailopen2) {
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
        //console.log($(".my导航栏").height());
        // 调整导航栏和主体的距离();
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.拉伸文本框);
        关闭所有worker1();
        关闭所有worker2();
        关闭所有worker3();
    },
});
