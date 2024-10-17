<template>
    <div class="hello flowerpassword">
        <h1>花密 不一样的密码管理工具</h1>
        <div class="container rong1" style="text-align: center">
            <div class="rong2">
                <h2>
                    <span>1</span>
                    输入
                </h2>
                <div class="input">
                    <p></p>
                    <h3>记忆密码</h3>
                    <p></p>
                    <p>
                        <input
                            v-on:change="handlechange()"
                            v-on:input="handlechange()"
                            v-model="message1"
                            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control password"
                            placeholder="输入密码"
                            name="password"
                            type="password"
                            value
                            tabindex="1"
                        />
                    </p>
                    <p></p>
                    <span>+</span>
                    <h3>区分代号</h3>
                    <p></p>
                    <p>
                        <input
                            v-on:change="handlechange()"
                            v-on:input="handlechange()"
                            v-model="message2"
                            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control key"
                            placeholder="输入代号"
                            name="key"
                            type="text"
                            value
                            tabindex="2"
                        />
                    </p>
                </div>
                <br />
                <p></p>
                <h2>
                    <span>2</span>
                    获取
                </h2>
                <p></p>
                <div class="get">
                    <p class="tuijian"></p>
                    <p></p>
                    <h3>最终密码</h3>
                    <p></p>
                    <span class="myhezi">
                        <p>
                            <input
                                v-model="message3"
                                id="clip-code168D9E36AE-A757-A2BD-F9D8-4A4DCFA02C61"
                                class="code16 col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet code16d form-control"
                                readonly
                            />
                        </p>
                        <br />
                        <p>
                            <button
                                class="btn-lg btn copycode16d btn-info copycode16"
                                data-clipboard-target="#clip-code168D9E36AE-A757-A2BD-F9D8-4A4DCFA02C61"
                                style="width: 100%"
                                v-on:click="functioncopy"
                            >
                                点击复制
                            </button>
                        </p>
                    </span>
                    <p>
                        <span
                            class="copyOK"
                            style="display: none"
                            ref="copyokref"
                            >√复制成功</span
                        >
                    </p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./vue-component-huami.ts"></script>

<style scoped>
.flowerpassword a {
    color: #42b983;
}
.flowerpassword body,
.flowerpassword html {
    background-color: #fff;
}
.flowerpassword body {
    font:
        14px/1.5 Tahoma,
        Helvetica,
        Arial,
        \5b8b\4f53;
    color: #000;
}
.flowerpassword a,
.flowerpassword a:hover {
    color: #09c;
    text-decoration: none;
}
.flowerpassword .left {
    float: left;
}
.flowerpassword .right {
    float: right;
}
.flowerpassword .clear {
    clear: both;
}
.flowerpassword header {
    text-align: left;
    padding: 0;
    margin: 15px auto;
}
.flowerpassword #logo {
    height: 39px;
}
.flowerpassword #shortcuts {
    margin: 15px 0 0 15px;
}
.flowerpassword #nav {
    float: center;
    margin-top: 10px;
}
.flowerpassword #nav li {
    margin: 0 7px;
}
.flowerpassword #nav li a {
    font-size: 22px;
    color: #09c;
}
.flowerpassword #nav li.active a,
.flowerpassword #nav li.active a:hover {
    background-color: #09c;
    color: #fff;
}
.flowerpassword #nav li a:hover {
    background-color: #79c6df;
    color: #fff;
}
.flowerpassword #index-box {
    background-color: #fff;
    width: 940px;
    clear: both;
    box-shadow: 0 0 4px 2px #ddd;
    border: 1px solid #ddd;
}
.flowerpassword #index-box .float-box {
    float: left;
    margin: 20px 0 20px 20px;
    display: inline;
}
.flowerpassword #index-box #content-nav {
    margin: 0;
    width: 200px;
}
.flowerpassword #index-box #content-nav li a {
    background-color: #e5ecdc;
}
.flowerpassword #index-slider {
    width: 940px;
    height: 200px;
    overflow: hidden;
    position: relative;
}
.flowerpassword #index-slider ul {
    list-style: none;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
}
.flowerpassword #index-slider li {
    width: 940px;
    height: 200px;
    float: left;
}
.flowerpassword #index-slider #pagination {
    top: 160px;
    left: 800px;
}
.flowerpassword #index-slider ul#pagination li {
    width: 16px;
    height: 16px;
    border-radius: 1em;
    background-color: #fff;
    box-shadow: 0 0 1px 2px #ccc;
    margin-right: 18px;
    margin-top: 4px;
}
.flowerpassword #index-slider ul#pagination li.active {
    width: 24px;
    height: 24px;
    margin-top: 0;
}
.flowerpassword #index-slider ul#pagination li:hover {
    background-color: #ddd;
    cursor: pointer;
}
.flowerpassword #index-report {
    width: 680px;
    height: 70px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    background-color: #e5ecdc;
}
.flowerpassword #index-report ul {
    list-style: none;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
}
.flowerpassword #index-report li {
    width: 680px;
    height: 70px;
    text-align: center;
    float: left;
    font-size: 32px;
    color: #666;
    font-family: å¾®è½¯é›…é»‘, é»‘ä½“;
    line-height: 70px;
}
.flowerpassword #index-report-pagination {
    list-style: none;
    margin-left: 35px;
    text-align: center;
}
.flowerpassword #index-report-pagination li {
    height: 65px;
    float: left;
    margin-right: 45px;
    cursor: pointer;
}
.flowerpassword #index-report-pagination li img {
    margin-top: 30px;
}
.flowerpassword #index-button {
    margin: 40px 0 30px;
    text-align: center;
}
.flowerpassword #index-button a {
    margin: 0 50px;
}
.flowerpassword #tab {
    margin-top: 30px;
}
.flowerpassword #tab li a {
    margin-right: 10px;
    border-bottom-color: #ddd;
    color: #666;
}
.flowerpassword #tab li a:hover {
    background-color: #f2f2f2;
    color: #333;
    border-color: #ddd #ddd transparent;
}
.flowerpassword #tab li.active a {
    background-color: #f2f2f2;
    color: #666;
    border-bottom-color: transparent;
}
.flowerpassword #content-nav {
    list-style: none;
    margin: 20px 0 0;
}
.flowerpassword #content-nav li a {
    color: #666;
    padding: 11px 0 11px 60px;
    display: block;
    margin-bottom: 1px;
    font-size: 22px;
}
.flowerpassword #content-nav li a.active,
.flowerpassword #content-nav li a:hover {
    background-color: #09c !important;
    color: #fff !important;
}
.flowerpassword h1,
.flowerpassword h2 {
    color: #09c;
    margin: 30px 0 12px;
}
.flowerpassword h2 {
    font-size: 22px;
}
.flowerpassword h2 span {
    font-size: 22px;
    color: #fff;
    margin-right: 7px;
    background-color: #09c;
    width: 33px;
    height: 33px;
    display: inline-block;
    text-align: center;
}
.flowerpassword h3 {
    font-size: 16px;
    color: #09c;
    margin: 20px 0;
}
.flowerpassword h3 span {
    font-size: 16px;
    color: #fff;
    margin-right: 6px;
    background-color: #09c;
    width: 26px;
    display: inline-block;
    text-align: center;
}
.flowerpassword .input span {
    color: #09c;
    font-weight: 700;
    font-size: 22px;
    margin: 0 20px;
}
.flowerpassword .input input {
    font-size: 14px;
    padding: 5px;
    margin-left: 5px;
}
.flowerpassword .input label {
    float: none;
    display: inline;
    padding-right: 5px;
}
.flowerpassword .input p {
    margin-top: 16px;
}
.flowerpassword .input p,
.flowerpassword .other {
    font-size: 12px;
    color: #999;
}
.flowerpassword .code16 {
    display: inline-block;
    text-align: center;
}
.flowerpassword .code16d {
    border: 2px solid #09c;
}
.flowerpassword .code16h {
    border: 2px solid #ff881c;
}
.flowerpassword .copycode16 {
    color: #000;
    display: inline-block;
    padding: 0 3px;
    cursor: pointer;
}
.flowerpassword .copycode16d {
    background-color: #09c;
    border: 2px solid #09c;
}
.flowerpassword .copycode16h {
    background-color: #ff881c;
    border: 2px solid #ff881c;
}
.flowerpassword p {
    font-size: 12px;
    color: #666;
    margin: 20px 0;
}
.flowerpassword .copyOK {
    color: #f2f2f2;
    border: 2px solid #f2f2f2;
    display: inline-block;
    margin-left: 16px;
    padding: 0 3px;
}
.flowerpassword .down-button {
    margin: 10px 20px 10px 0;
}
.flowerpassword .get {
    margin-bottom: 100px;
}
.flowerpassword footer {
    margin: 50px 0 30px;
}
.flowerpassword footer p {
    margin: 0 0 5px;
    color: #999;
}
.flowerpassword footer p span {
    margin: 0 10px;
}
.flowerpassword footer p a {
    color: #999;
}
.flowerpassword footer p a:hover {
    color: #333;
}
.flowerpassword a,
.flowerpassword a:hover {
    color: #09c;
    text-decoration: none;
}
.flowerpassword h1,
.flowerpassword h2 {
    color: #09c;
    margin: 30px 0 12px;
}
.flowerpassword .input p,
.flowerpassword .other {
    font-size: 12px;
    color: #999;
}

.flowerpassword .code16d:hover {
    border: 2px solid #ff881c;
}
.flowerpassword .copycode16d:hover {
    background-color: #ff881c;
    border: 2px solid #ff881c;
}
</style>
