import * as Vue from "vue";
import $ from "jquery";
import { md5 } from "./assetsutils/md5";
let huami = Vue.defineComponent({
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
            if (this.message3) {
                $("#copyOK").show();
                $("#copyOK")
                    .fadeTo(0, 0)
                    .css("border-color", "#22B614")
                    .css("background-color", "#22B614")
                    .fadeTo("fast", 1)
                    .fadeTo(2000, 1)
                    .fadeTo(3000, 0, function () {
                        $("#copyOK").hide();
                    });
            }
        },
        handlechange() {
            var password = this.message1;
            var key = this.message2;
            if (password && key) {
                var md5one = md5(password, key);
                var md5two = md5(md5one, "snow");
                var md5three = md5(md5one, "kise");
                var rule = md5three.split("");
                var source = md5two.split("");
                for (var i = 0; i <= 31; i++) {
                    if (Number.isNaN(Number(source[i]))) {
                        var str = "sunlovesnow1990090127xykab";
                        if (str.search(rule[i]) > -1) {
                            source[i] = source[i].toUpperCase();
                        }
                    }
                }
                var code32 = source.join("");
                var code1 = code32.slice(0, 1);
                var code16;
                if (Number.isNaN(Number(code1))) {
                    code16 = code32.slice(0, 16);
                } else {
                    code16 = "K" + code32.slice(1, 16);
                }
                this.message3 = code16;
            }
        },
    },
});
export default huami;
