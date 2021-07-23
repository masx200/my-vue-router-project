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
                            class="
                                col-lg-12 col-md-12 col-sm-12 col-xs-12
                                form-control
                                password
                            "
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
                            class="
                                col-lg-12 col-md-12 col-sm-12 col-xs-12
                                form-control
                                key
                            "
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
                                id="clip-code16"
                                class="
                                    code16
                                    col-lg-12 col-md-12 col-sm-12 col-xs-12
                                    snippet
                                    code16d
                                    form-control
                                "
                                readonly
                            />
                        </p>
                        <br />
                        <p>
                            <button
                                class="
                                    btn-lg btn
                                    copycode16d
                                    btn-info
                                    copycode16
                                "
                                data-clipboard-target="#clip-code16"
                                style="width: 100%"
                                v-on:click="functioncopy"
                            >
                                点击复制
                            </button>
                        </p>
                    </span>
                    <p>
                        <span class="copyOK" style="display: none"
                            >√复制成功</span
                        >
                    </p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./vue-component-huami.js"></script>
