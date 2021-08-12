import * as Vue from "vue";
import { ref } from "vue";
import $ from "jquery";
//@ts-ignore
import { generatehuami } from "./generatehuami";
let huami = Vue.defineComponent({
    setup() {
        const copyokref = ref();
        return { copyokref };
    },
    mounted() {
        document.title = "masx200的github主页-" + "花密  不一样的密码管理工具";
    },
    name: "huami",
    data() {
        return {
            message1: "",
            message2: "",
            message3: "",
        };
    },
    methods: {
        functioncopy() {
            const okele = this.copyokref;
            if (!okele) {
                return;
            }
            if (this.message3) {
                $(okele).show();
                $(okele)
                    .fadeTo(0, 0)
                    .css("border-color", "#22B614")
                    .css("background-color", "#22B614")
                    .fadeTo("fast", 1)
                    .fadeTo(2000, 1)
                    .fadeTo(3000, 0, function () {
                        $(okele).hide();
                    });
            }
        },
        handlechange() {
            var password = this.message1;
            var key = this.message2;
            if (password && key) {
                const code16 = generatehuami(password, key);
                this.message3 = code16;
            }
        },
    },
});
export default huami;
