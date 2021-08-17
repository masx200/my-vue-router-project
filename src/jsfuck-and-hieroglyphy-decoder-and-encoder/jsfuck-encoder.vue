<template>  <div class="container">
            <h1 style="font-size: 30px">编码JSFUCK <br />encode JSFUCK</h1>
            <p>
                JSFuck是一种基于JavaScript原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码。
            </p>
            <p>()+[]!</p>
            <p>
                它不依赖于浏览器，因此您甚至可以在Node.js上运行它。
                <br />使用下面的表单转换您自己的脚本。取消选中“eval
                source”以获取纯字符串。
            </p>
            <p>
                浏览器兼容性:建议在最新超高版本的chrome或者Firefox或者safari浏览器中运行！
            </p>
            <br />
            <textarea id="input" type="text"> </textarea>
            <br />
            <p>
                <button class="btn btn-outline-primary" id="encode" type="text">
                    Encode string
                </button>
                <button
                    class="btn btn-outline-primary"
                    id="encodescript"
                    type="text"
                >
                    Encode script
                </button>
            </p>

            <textarea id="clip9F02A223-F000-D1D5-5679-79F6719E9658"> </textarea>
            <div class="actions">
                <span id="stats">0 chars</span>
                <button class="btn btn-outline-success" id="run">
                    Run This
                </button> <button
                class="
                    btn btn-outline-primary
                    mui-btn mui-btn-primary mui-btn-outlined
                "
                style="font-size: 1.5em; padding: 0.5rem 1rem"
                data-clipboard-target="#clip9F02A223-F000-D1D5-5679-79F6719E9658"
            >
                复制
            </button>
            </div>
            <br />
            <p>
                <a
                    href="https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER"
                    >https://github.com/masx200/JSfuck-and-hieroglyphy-Decoder-and-ENCODER</a
                >
            </p>
            <p>
                <a href="https://github.com/aemkei/jsfuck/blob/master/jsfuck.js"
                    >https://github.com/aemkei/jsfuck/blob/master/jsfuck.js</a
                >
            </p>
        </div></template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    mounted() {
        document.title =
            " JSFuck encoder-Write any JavaScript with 6 Characters:[]()!+";
    },
    setup() {},
});
</script>
<style scoped src="./jsfuck.css"></style>
