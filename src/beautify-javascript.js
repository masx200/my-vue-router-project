import asynchighlighttext from "./async highlight js text.js";
import lashentextarea from "./function lashentextarea.js";
export default {
    name: "beautifyjvascript",
    data() {
        return {
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
            asynchighlighttext(this.input)
                .then((output) => {
                    this.$refs.输出框.innerHTML = output;
                //    alert(output);
                })
                .catch((e) => {
                    this.$refs.输出框.innerText = String(e) + e.stack;
                    alert(String(e) + e.stack);
                })
                .finally(() => {
                    this.$refs.detail1.open = false;
                    this.$refs.detail2.open = true;
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
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.拉伸文本框);
    },
};
