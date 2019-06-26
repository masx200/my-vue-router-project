// var Vue = window.IMPORTCJSAMDUMD.REQUIREPACKAGE("vue");
// import Vue from "vue";
import Vue from "vue/dist/vue.esm.browser";
let home = Vue.extend({
  template: `<div class="hello"><div class="container"><div class="jumbotron"><h1>欢迎登陆页面！</h1><p><a target="_blank"href="https://weibo.com/2174458781?">一生忽而得一夏当司掌好年华的微博</a></p><p><a target="_blank"href="https://github.com/masx200">masx200的github仓库</a></p></div></div><p><a target="_blank" href="https://cn.vuejs.org/v2/api/">文档API — Vue.js</a></p><p><a target="_blank" href="https://cn.vuejs.org/v2/guide/">教程介绍 — Vue.js</a></p><h1>VUE ROUTER测试</h1><h2>欢迎来到VUE</h2><h1>Hello, world!</h1><h2>现在是 {{new Date().toLocaleTimeString()}}.</h2><h1>{{ msg }}</h1></div>`,
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {},
  mounted() {
    document.title = "vue-router-project-" + "home";
    window.location.hash = "#/";
    // window.mychangemenu();
    // mychangemenu();
  }
});
export default home;
