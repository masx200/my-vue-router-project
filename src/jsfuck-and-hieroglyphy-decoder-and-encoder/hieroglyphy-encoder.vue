<template>
    <div class="container">
        <h1 style="font-size: 30px">
            编码hieroglyphy <br />encode hieroglyphy
        </h1>
        <p>
            hieroglyphy是一个工具和javascript库，用于将字符串，数字和脚本转换为（）[]
            {} +的等效序列！在浏览器中运行的字符。
        </p>
        <p>()+[]!{}</p>
        <p>
            浏览器兼容性:
            建议在最新超高版本chrome或者Firefox或者safari浏览器中运行！
        </p>
        <br />
        <textarea id="input" type="text"> </textarea>
        <br />
        <p>
            <button
                class="btn btn-outline-success"
                id="encodescript"
                type="text"
            >
                Encode script
            </button>

            <button id="encodestring" type="text" class="btn btn-outline-info">
                Encode string
            </button>
        </p>
        <br />
        <br />
        <textarea id="clip5869EC85-6180-4E4B-E565-561BA1F25223"> </textarea>
        <div class="actions">
            <span id="stats">0 chars</span>
            <button class="btn btn-outline-primary" id="run"       style="font-size: 1.5em; padding: 0.5rem 1rem">Run This</button>
            <button
                class="
                    btn btn-outline-primary
                    mui-btn mui-btn-primary mui-btn-outlined
                "
                style="font-size: 1.5em; padding: 0.5rem 1rem"
                data-clipboard-target="#clip5869EC85-6180-4E4B-E565-561BA1F25223"
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
            <a
                href="https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"
                >https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js</a
            >
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    mounted() {
        document.title = "hieroglyphy encoder";
    },
    setup() {},
});
</script>
<style scoped src="./hieroglyphy-encoder.css"></style>
