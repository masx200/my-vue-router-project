<template>
  <div>
    <h2>美化JavaScript代码</h2>
    <h3>
      使用acorn生成抽象语法树,
      <br />使用escodegen生成代码
    </h3>
    <h4>删除注释,并格式整理</h4>
    <button class="btn btn-outline-primary clipbutton" v-on:click="切换左右分屏()" v-text="分屏状态"></button>
    <button class="btn btn-outline-primary clipbutton" v-on:click="transformcode">转换</button>
    <button class="btn btn-outline-primary clipbutton" v-on:click="clearcode">清除</button>
    <div class="row">
      <!-- class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" -->
      <div class="col-sm-12 col-12" v-bind:class="模式左右?绑定宽样式:绑定窄样式">
        <details open ref="detail1">
          <summary
            class="btn btn-outline-primary mui-btn mui-btn-outline-primary"
            v-on:click="拉伸文本框()"
          >展开收起</summary>
          <h3>源本代码</h3>

          <div>
            <button
              class="btn btn-outline-primary clipbutton"
              data-clipboard-target="#clip50b92c49b148d93bba82d6b41a4651fce30"
            >复制</button>
            <textarea
              ref="输入框"
              v-on:click="拉伸文本框()"
              v-model="input"
              class="form-control"
              id="clip50b92c49b148d93bba82d6b41a4651fce30"
              style="height:50px;    text-align: left !important;"
            />
          </div>
        </details>
      </div>
      <!-- <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> -->
      <div class="col-sm-12 col-12" v-bind:class="模式左右?绑定宽样式:绑定窄样式">
        <details open ref="detail2">
          <summary
            class="btn btn-outline-primary mui-btn mui-btn-outline-primary"
            v-on:click="拉伸文本框()"
          >展开收起</summary>
          <div>
            <h3>美化代码</h3>
            <button
              class="btn btn-outline-primary clipbutton"
              data-clipboard-target="#clip50b92c49b148d93bba82d6b41a4651fce37"
            >复制</button>
            <div class="article-content">
              <div
                v-on:click="拉伸文本框()"
                ref="输出框"
                v-html="output"
                class="form-control"
                id="clip50b92c49b148d93bba82d6b41a4651fce37"
                style="height: fit-content;"
              ></div>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>
<script>
// import dynamicImport from "acorn-dynamic-import";
import lashentextarea from "./function lashentextarea";
// import {
//   // parse,
//   generate,
//   Parser
// } from "acorn-parse-escodegen-generate-esm-broweser";
import marked /*  { parser } */ from "./assetsutils/marked.min.js";

import hljs from "./assetsutils/highlight.min.js";

import 弹出消息通用 from "./assetsutils/my弹出消息通用.js";
// import { constants } from 'crypto';
// // import { constants } from 'crypto';
// constants
// const myparser = Parser.extend(dynamicImport);
// // console.log(myparser);
// const parse = myparser.parse.bind(myparser);

// console.log(Parser, parse, dynamicImport);

import codeparseandgenerate from "./code-parseandgenerate.js";
// import func from "../vue-temp/vue-editor-bridge";
export default {
  name: "beautifyjvascript",
  data() {
    return {
      分屏状态: "上下分屏",
      input: "",
      output: "",

      模式左右: true,
      绑定宽样式: "col-xl-6 col-lg-6 col-md-6",
      绑定窄样式: "col-xl-12 col-lg-12 col-md-12"
      // true
    };
  },
  methods: {
    clearcode() {
      this.$refs.输入框.style.height = "50px";
      this.input = "";
      this.output = "";
      this.$refs.输出框.innerHTML = "";
    },

    切换左右分屏() {
      this.模式左右 = !this.模式左右;

      this.分屏状态 = "上下分屏" === this.分屏状态 ? "左右分屏" : "上下分屏";
      this.拉伸文本框();
    },
    transformcode() {
      //   this.output = this.input;
      //   console.log(this.input);
      //   console.log(parse);
      //   console.log(
      (async () => {
        try {
          //   var ast = parse(
          //     this.input,

          //     { sourceType: "module" }
          //   );
          //   //   );
          //   var code = generate(ast);

          var code = codeparseandgenerate(this.input);
          var text = `
\`\`\`javascript
${code}
\`\`\`
`;
          const divele = document.createElement("div");

          // $(ref.current).html(marked(text));
          /* 使用jquery的漏洞,如果内容包括html标签的话,当前网页会被覆盖 */

          divele.innerHTML = marked(text);

          Array.from(divele.querySelectorAll("pre code")).forEach(block =>
            hljs.highlightBlock(block)
          );

          this.output = divele.innerHTML;
          console.log(divele.innerHTML);
          // constants
          弹出消息通用("success");
        } catch (error) {
          console.error(error);
          弹出消息通用("danger");
        }
      })();
    },
    拉伸文本框() {
      lashentextarea(this.$refs.输入框);
      requestAnimationFrame(() => {
        function 上下分屏() {
          //   }
          //   var 上下分屏 = () => {
          this.模式左右 = false;
          this.分屏状态 = "左右分屏";
        }

        if (this.$refs.detail1.open && !this.$refs.detail2.open) {
          上下分屏.bind(this)();
        }
        if (!this.$refs.detail1.open && this.$refs.detail2.open) {
          上下分屏.bind(this)();
        }
      });
    }
  },
  watch: {
    input() {
      //   console.log("watch input");
      lashentextarea(this.$refs.输入框);
    }
  },
  mounted() {
      document.title='美化JavaScript代码'
    window.addEventListener("resize", this.拉伸文本框);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.拉伸文本框);
  }
};
</script>