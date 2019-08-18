<script>
function 获取当前时间() {
  return new Date().toString().slice(0, new Date().toString().indexOf("GMT"));
}
import picture1 from "./babeljs.png";

import picture2 from "./parcel.jpg";
import picture3 from "./bootstrap.png";
import picture4 from "./logo-jquery.png";
import picture5 from "./react.svg";
import picture6 from "./vue.png";
import picture7 from "./webpack.svg";

// var Vue = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("vue");
// import Vue from "vue";
var timer;
import Vue from "vue/dist/vue.esm.browser";
let home = Vue.extend({
  //  /*  template: `
  //   <div>

  //   <div class="hello"><div class="container"><div class="jumbotron"><h1>欢迎登陆页面！</h1><p><a target="_blank"href="https://weibo.com/2174458781?">一生忽而得一夏当司掌好年华的微博</a></p><p><a target="_blank"href="https://github.com/masx200">masx200的github仓库</a></p></div></div>
  //   <h2>现在是 {{nowtime}}</h2>

  //   <p><a target="_blank" href="https://cn.vuejs.org/v2/api/">文档API — Vue.js</a></p><p><a target="_blank" href="https://cn.vuejs.org/v2/guide/">教程介绍 — Vue.js</a></p><h1>VUE ROUTER测试</h1><h2>欢迎来到VUE</h2><h1>Hello, world!</h1>

  //   <h1>{{ msg }}</h1></div>

  //   <div id="图片列表200">
  //         <hr />
  //         <img loading="lazy" :src="picture1" />
  //         <hr />
  //         <img loading="lazy" :src="picture2" />
  //         <hr />
  //         <img loading="lazy" :src="picture3" />
  //         <hr />
  //         <img loading="lazy" :src="picture4" />
  //         <hr />
  //         <img loading="lazy" :src="picture5" />
  //         <hr />
  //         <img loading="lazy" :src="picture6" />
  //         <hr />
  //         <img loading="lazy" :src="picture7" />
  //       </div>
  //     </div>

  //     </div>
  //   `, */
  name: "home",
  data() {
    return {
      nowtime: 获取当前时间(),
      msg: "Welcome to Your Vue.js App",

      picture1,
      picture2,
      picture3,
      picture4,
      picture5,
      picture6,
      picture7
    };
  },
  methods: {},
  mounted() {
    let setnowtime = t => {
      this.nowtime = t;
    };
    document.title = "masx200的github主页" + "vue-router-project-" + "home";
    window.location.hash = "#/";
    // window.mychangemenu();
    // mychangemenu();
    timer = setInterval(() => {
      setnowtime(获取当前时间());
    }, 1100);
  },
  beforeDestroy() {
    clearInterval(timer);
  }
});
export default home;
</script>
<template>
  <div>
    <div class="hello">
      <div class="container">
        <div class="jumbotron">
          <h1>欢迎登陆页面！</h1>
          <p>
            <a target="_blank" href="https://weibo.com/2174458781?">一生忽而得一夏当司掌好年华的微博</a>
          </p>
          <p>
            <a target="_blank" href="https://github.com/masx200">masx200的github仓库</a>
          </p>
        </div>
      </div>
      <h2>现在是 {{nowtime}}</h2>

      <p>
        <a target="_blank" href="https://cn.vuejs.org/v2/api/">文档API — Vue.js</a>
      </p>
      <p>
        <a target="_blank" href="https://cn.vuejs.org/v2/guide/">教程介绍 — Vue.js</a>
      </p>
      <h1>VUE ROUTER测试</h1>
      <h2>欢迎来到VUE</h2>
      <h1>Hello, world!</h1>

      <h1>{{ msg }}</h1>
    </div>

    <div id="图片列表200">
      <hr />
      <img loading="lazy" :src="picture1" />
      <hr />
      <img loading="lazy" :src="picture2" />
      <hr />
      <img loading="lazy" :src="picture3" />
      <hr />
      <img loading="lazy" :src="picture4" />
      <hr />
      <img loading="lazy" :src="picture5" />
      <hr />
      <img loading="lazy" :src="picture6" />
      <hr />
      <img loading="lazy" :src="picture7" />
    </div>
  </div>

  <!-- </div> -->
</template>