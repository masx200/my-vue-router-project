<script>
// import {
//   initGlobalState,
//   bindGlobalStore
// } from "./test/vue-simple-global-state-store-manager";
// initGlobalState({ huamipassword: "", huaminame: "", huamioutput: "" });
import Vue from "vue/dist/vue.esm.browser";
import $ from "jquery";
// var Vue = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("vue");
import { md5 } from "./md5";
// import Vue from "vue";
let huami = Vue.extend({
  mounted() {
    // vuehuamirender();
    // console.log("huami,mounted");
    // console.log(this);
    document.title = "masx200的github主页-" + "花密  不一样的密码管理工具";
  },
  //   beforeDestroy() {
  //     // console.log("huami,beforeDestroy");
  //     // console.log("keysave=", window.keysave);
  //   },
  //beforeDestroy
  //   activated() {
  //     // console.log("huami, activated")
  //   },
  //activated
  //   updated() {
  //     // console.log("huami, updated")
  //   },
  //   beforeUpdate() {
  //     // console.log("huami,beforeUpdate")
  //   },

  //   beforeCreate() {
  //     // console.log("huami,beforeCreate")
  //   },
  //   beforeMount() {
  //     // console.log("huami,beforeMount")
  //   },
  //   destroyed() {
  //     // console.log("huami,destroyed")
  //   },
  //   /* template: `
  //   <div class="hello flowerpassword"><h1>花密  不一样的密码管理工具</h1>
  //   <div class="container" id="rong1" style="text-align: center;">
  //       <div class="" id="rong2">
  //           <h2>
  //               <span>1</span>
  //               输入
  //           </h2>
  //           <div id="input">
  //               <p></p>
  //               <h3>记忆密码</h3>
  //               <p></p>
  //               <p>
  //                   <input v-on:change="handlechange()"  v-on:input="handlechange()" v-model="message1"  class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control" id="password" placeholder="输入密码" name="password" type="password" value tabindex="1">
  //               </p>
  //               <p></p>
  //               <span>+</span>
  //               <h3>区分代号</h3>
  //               <p></p>
  //               <p>
  //                   <input  v-on:change="handlechange()"  v-on:input="handlechange()"  v-model="message2"  class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control" id="key" placeholder="输入代号" name="key" type="text" value tabindex="2">
  //               </p>
  //           </div>
  //           <br>
  //           <p></p>
  //           <h2>
  //               <span>2</span>
  //               获取
  //           </h2>
  //           <p></p>
  //           <div id="get">
  //               <p id="tuijian"></p>
  //               <p></p>
  //               <h3>最终密码</h3>
  //               <p></p>
  //               <span id="myhezi">
  //                   <p>
  //                       <input   v-model="message3"  id="code16" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet code16d form-control" readonly>
  //                   </p>
  //                   <br>
  //                   <p>
  //                       <button id="copycode16" class="btn-lg btn copycode16d btn-info" data-clipboard-target="#code16" style="width: 100%;"  v-on:click="functioncopy">点击复制</button>
  //                   </p>
  //               </span>
  //               <p>
  //                   <span id="copyOK"  style="display: none;">√复制成功</span>
  //               </p>
  //               <p></p>
  //           </div>
  //       </div>
  //   </div>
  // </div>
  // `, */
  name: "huami",
  //   created() {
  //     // console.log("huami,created");
  //   },
  data() {
    return { message1: "", message2: "", message3: "" };
  },
  methods: {
    functioncopy() {
      if (
        this.message3
        // $("#code16").val()
      ) {
        $("#copyOK").show();
        $("#copyOK")
          .fadeTo(0, 0)
          .css("border-color", "#22B614")
          .css("background-color", "#22B614")
          .fadeTo("normal", 1)
          .fadeTo(2000, 1)
          .fadeTo(3000, 0, function() {
            $("#copyOK").hide();
          });
      }
    },
    handlechange() {
      //   console.log(this);
      //   countCode();
      //   (function countCode() {
      var password = this.message1;
      //  $("#password").val();
      var key = this.message2;
      //  $("#key").val();
      if (password && key) {
        var md5one = md5(password, key);
        var md5two = md5(md5one, "snow");
        var md5three = md5(md5one, "kise");
        var rule = md5three.split("");
        var source = md5two.split("");
        for (var i = 0; i <= 31; i++) {
          if (isNaN(source[i])) {
            var str = "sunlovesnow1990090127xykab";
            if (str.search(rule[i]) > -1) {
              source[i] = source[i].toUpperCase();
            }
          }
        }
        var code32 = source.join("");
        var code1 = code32.slice(0, 1);
        var code16;
        if (isNaN(code1)) {
          code16 = code32.slice(0, 16);
        } else {
          code16 = "K" + code32.slice(1, 16);
        }
        //   $("#code16").val(code16);
        this.message3 = code16;
        // keysave = $("#key").val();
      }

      //   console.log("keysave",keysave)
      //   })();
      //
    }
  }
});
// var huamibind = bindGlobalStore(
//   { huamipassword: "message1", huaminame: "message2", huamioutput: "message3" },
//   huami
// );
// console.log(Vue, huamibind, huami);
// export default huamibind;
export default huami;
</script>
<template>
  <div class="hello flowerpassword">
    <h1>花密 不一样的密码管理工具</h1>
    <div class="container" id="rong1" style="text-align: center;">
      <div class id="rong2">
        <h2>
          <span>1</span>
          输入
        </h2>
        <div id="input">
          <p></p>
          <h3>记忆密码</h3>
          <p></p>
          <p>
            <input
              v-on:change="handlechange()"
              v-on:input="handlechange()"
              v-model="message1"
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control"
              id="password"
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
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-control"
              id="key"
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
        <div id="get">
          <p id="tuijian"></p>
          <p></p>
          <h3>最终密码</h3>
          <p></p>
          <span id="myhezi">
            <p>
              <input
                v-model="message3"
                id="code16"
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12 snippet code16d form-control"
                readonly
              />
            </p>
            <br />
            <p>
              <button
                id="copycode16"
                class="btn-lg btn copycode16d btn-info"
                data-clipboard-target="#code16"
                style="width: 100%;"
                v-on:click="functioncopy"
              >点击复制</button>
            </p>
          </span>
          <p>
            <span id="copyOK" style="display: none;">√复制成功</span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>