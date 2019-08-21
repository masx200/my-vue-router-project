<template>
  <div>
    <h2>美化javascript代码</h2>
    <button class="btn btn-outline-primary clipbutton" v-on:click="切换左右分屏()" v-text="分屏状态"></button>
    <h4>删除注释,并格式整理</h4>
    <button class="btn btn-outline-primary clipbutton" v-on:click="transformcode">转换</button>
    <button class="btn btn-outline-primary clipbutton" v-on:click="clearcode">清除</button>
    <div class="row">
      <!-- class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" -->
      <div class="col-sm-12 col-12" v-bind:class="模式左右?绑定宽样式:绑定窄样式">
        <div>
          <h3>源本代码</h3>
          <button
            class="btn btn-outline-primary clipbutton"
            data-clipboard-target="#clip50b92c49b148d93bba82d6b41a4651fce30"
          >复制</button>
          <textarea
            ref="输入框"
            v-model="input"
            class="form-control"
            id="clip50b92c49b148d93bba82d6b41a4651fce30"
            style="height:50px;    text-align: left !important;"
          />
        </div>
      </div>
      <!-- <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> -->
      <div class="col-sm-12 col-12" v-bind:class="模式左右?绑定宽样式:绑定窄样式">
        <div>
          <h3>美化代码</h3>
          <button
            class="btn btn-outline-primary clipbutton"
            data-clipboard-target="#clip50b92c49b148d93bba82d6b41a4651fce37"
          >复制</button>
          <div class="article-content">
            <div
              ref="输出框"
              v-html="output"
              class="form-control"
              contenteditable="true"
              id="clip50b92c49b148d93bba82d6b41a4651fce37"
              style="height: fit-content;"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
function lashentextarea(eles) {
  // console.log(eles.outerHTML);
  requestAnimationFrame(function() {
    //   for (var value of eles) {
    const value = eles;
    var myptext = value;
    //  document.getElementById(value);

    var el = myptext;
    // textarea.scrollHeight = 60
    // textarea.style.height = "60px"
    // makeExpandingArea(textarea);
    if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
      // console.log(parseInt(el.style.height), el.scrollHeight);
      myptext.style.height = myptext.scrollHeight + 2 + "px";
      console.log("拉伸文本框", [
        parseInt(el.style.height),
        el.scrollHeight,
        myptext.outerHTML
      ]);
    }
    //   }
  });
}
import { parse, generate } from "acorn-parse-escodegen-generate-esm-broweser";
import marked from "./assetsutils/marked.min.js";

import hljs from "./assetsutils/highlight.min.js";

import 弹出消息通用 from "./assetsutils/my弹出消息通用.js";
// import { constants } from 'crypto';
export default {
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
      this.input = "";
      this.output = "";
      this.$refs.输出框.innerHTML = "";
    },

    切换左右分屏() {
      this.模式左右 = !this.模式左右;

      this.分屏状态 = "上下分屏" === this.分屏状态 ? "左右分屏" : "上下分屏";
    },
    transformcode() {
      //   this.output = this.input;
      //   console.log(this.input);
      //   console.log(parse);
      //   console.log(
      (async () => {
        try {
          var ast = parse(
            this.input,

            { sourceType: "module" }
          );
          //   );
          var code = generate(ast);
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
    }
  },
  watch: {
    input() {
      //   console.log("watch input");
      lashentextarea(this.$refs.输入框);
    }
  },
  mounted() {
    window.addEventListener("resize", this.拉伸文本框);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.拉伸文本框);
  }
};
</script>