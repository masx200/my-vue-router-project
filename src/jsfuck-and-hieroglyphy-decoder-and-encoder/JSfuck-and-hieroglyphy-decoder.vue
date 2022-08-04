<template>
    <div>
        <div class="container">
            <h1 style="font-size: 30px">
                解码JSFUCK和hieroglyphy <br />decode JSFUCK and hieroglyphy
            </h1>
            <p>
                JSFuck是一种基于JavaScript原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码。
            </p>
            <p>()+[]!</p>
            <p>
                hieroglyphy是一个工具和javascript库，用于将字符串，数字和脚本转换为（）[]{}+的等效序列！在浏览器中运行的字符。
            </p>
            <p>()+[]!{}</p>
            <p>
                浏览器兼容性:建议在最新超高版本chrome或者Firefox或者safari浏览器中运行！
            </p>
            <br />
            <textarea
                v-model="inputcode"
                placeholder="Paste your code here!"
                id="code"
                style="width: 100%; min-height: 250px"
            >
            </textarea>
            <input
                style="font-size: 1.5em; padding: 0.5rem 1rem"
                @click="decodehandler"
                type="button"
                id="decode"
                value="Decode"
                class="btn btn-primary"
            />
            <textarea
                id="clip9C4C7C63-E416-6DE0-AA6B-831D8F93393C"
                style="width: 100%; min-height: 250px"
                v-model="outputcode"
            >
            </textarea>
            <button
                @click="runhandler"
                class="btn btn-outline-primary mui-btn mui-btn-primary mui-btn-outlined"
                id="run"
                style="font-size: 1.5em; padding: 0.5rem 1rem"
            >
                Run This
            </button>
            <button
                class="btn btn-outline-primary mui-btn mui-btn-primary mui-btn-outlined"
                style="font-size: 1.5em; padding: 0.5rem 1rem"
                data-clipboard-target="#clip9C4C7C63-E416-6DE0-AA6B-831D8F93393C"
            >
                复制
            </button>
            <br />
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
            <a
                href="https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js"
                >https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js</a
            >
        </div>
    </div>
</template>
<script lang="ts" src="./JSfuck-and-hieroglyphy-decoder.ts"></script>
<style scoped src="./decoder.css"></style>
