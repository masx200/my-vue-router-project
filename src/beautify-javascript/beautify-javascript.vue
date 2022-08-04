<template>
    <div>
        <h2>美化JavaScript代码</h2>
        <h3>
            使用acorn生成抽象语法树,
            <br />使用escodegen生成代码<br />
            使用prettier进行代码格式化
        </h3>
        <h4>删除注释,并格式整理</h4>
        <button
            class="btn btn-outline-primary clipbutton"
            v-on:click="切换左右分屏()"
            v-text="分屏状态"
        ></button>
        <button
            class="btn btn-outline-primary clipbutton"
            v-on:click="transformcode()"
            :disabled="disablebutton"
        >
            转换
        </button>
        <button
            class="btn btn-outline-primary clipbutton"
            v-on:click="clearcode()"
        >
            清除
        </button>
        <div class="row">
            <div
                v-bind:class="模式左右 ? 绑定宽样式 : 绑定窄样式"
                class="col-sm-12 col-12"
            >
                <details :open="detailopen1" ref="detail1" @toggle="toggle1">
                    <summary
                        class="btn btn-outline-primary mui-btn mui-btn-outline-primary"
                        v-on:click="拉伸文本框()"
                    >
                        展开收起
                    </summary>
                    <h3>源本代码</h3>

                    <div>
                        <button
                            class="btn btn-outline-primary clipbutton"
                            data-clipboard-target="#clip50b92c49b148d93bba82d6b41a4651fce30"
                        >
                            复制
                        </button>
                        <textarea
                            ref="输入框"
                            v-on:click="拉伸文本框()"
                            v-model="input"
                            class="form-control"
                            id="clip50b92c49b148d93bba82d6b41a4651fce30"
                            style="height: 50px; text-align: left !important"
                        />
                    </div>
                </details>
            </div>

            <div
                v-bind:class="模式左右 ? 绑定宽样式 : 绑定窄样式"
                class="col-sm-12 col-12"
            >
                <details :open="detailopen2" ref="detail2" @toggle="toggle2">
                    <summary
                        class="btn btn-outline-primary mui-btn mui-btn-outline-primary"
                        v-on:click="拉伸文本框()"
                    >
                        展开收起
                    </summary>
                    <div>
                        <h3>美化代码</h3>
                        <button
                            class="btn btn-outline-primary clipbutton"
                            data-clipboard-target="#clip50b92c49b148d93bba82d6b41a4651fce37"
                        >
                            复制
                        </button>
                        <div class="article-content">
                            <div
                                v-on:click="拉伸文本框()"
                                ref="输出框"
                                v-html="output"
                                class="form-control"
                                id="clip50b92c49b148d93bba82d6b41a4651fce37"
                                style="height: max-content"
                            ></div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </div>
</template>

<script src="./beautify-javascript.ts"></script>
