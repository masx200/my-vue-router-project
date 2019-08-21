<script>
import { hashchangehandler } from "./vue-index-render";
import $ from "jquery";
import Vue from "vue/dist/vue.esm.browser.min.js";
let App = Vue.extend({
  //  /*  template: `<div id="root">
  //             <div id="my导航栏" class="fixed-top container-fluid">
  //             <nav class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light" role="navigation">

  //             <div class="container-fluid">
  //             <div class="navbar-header">
  //             <a class="navbar-brand mui-btn mui-btn-primary mui-btn-outlined" href="../index.html">masx200的github主页</a>
  //             <button
  //                   class="navbar-toggler"
  //                   type="button"
  //                   data-toggle="collapse"
  //                   data-target="#example-navbar-collapse"
  //                   v-on:click='togglecollapsenavbar'
  //                 >
  //                   <span class="navbar-toggler-icon"></span>
  //                 </button>

  //             </div>
  //             <div class="collapse navbar-collapse" id="example-navbar-collapse">
  //             <ul class="nav navbar-nav" id="mynavul" @click="myfreshdata" >
  //             <li id="mynav1" v-bind:class="{ active: isActive1 }">

  //             <router-link to="/"  class="nav-link mui-btn mui-btn-primary mui-btn-outlined">基于VUE的首页</router-link>
  //             </li>
  //             <li id="mynav2" v-bind:class="{ active: isActive2 }">
  //             <router-link to="/huami"  class="nav-link mui-btn mui-btn-primary mui-btn-outlined">花密网页版</router-link>
  //             </li>
  //             <li id="mynav3" v-bind:class="{ active: isActive3 }">
  //             <router-link to="/about"  class="nav-link mui-btn mui-btn-primary mui-btn-outlined">关于VUE</router-link>
  //             </li>
  //             <li>
  //             <a href="../index.html#/react-home"  class="nav-link mui-btn mui-btn-primary mui-btn-outlined">基于react的首页</a>
  //             </li>
  //             <li class="">

  //             <a href="../index.html#/picalc"  class="nav-link mui-btn mui-btn-primary mui-btn-outlined">圆周率计算多线程</a>

  //             </li>
  //             <li><a href="../index.html#/decoder"  class="nav-link mui-btn mui-btn-primary mui-btn-outlined">JSfuck-and-hieroglyphy-Decoder-and-ENCODER</a>
  //             </li>
  //             </ul>
  //             </div>
  //             </div>
  //             </nav>
  //             </div>

  //             <div class="container" id="my主体" style="min-width: 100%;padding-top: 53px;"><router-view /> </div>

  //             </div>`, */
  name: "App",
  data() {
    return {
      isActive1: window.location.hash == "#/" ? true : false,
      isActive2: window.location.hash == "#/huami" ? true : false,
      isActive3: window.location.hash == "#/about" ? true : false
    };
  },
  methods: {
    togglecollapsenavbar() {
      $("#example-navbar-collapse").toggle();
    },
    myfreshdata() {
      // console.log("myfreshdata")
      // console.log(this.isActive1,this.isActive2,this.isActive3)
      (this.isActive1 = window.location.hash === "#/"),
        (this.isActive2 = window.location.hash === "#/huami"),
        (this.isActive3 = window.location.hash === "#/about");
      // Vue.set(this.isActive1)
      //   console.log(
      //     "myfreshdata",
      //     this.isActive1,
      //     this.isActive2,
      //     this.isActive3
      //   );
    } // mychangemenu=()=>mychangemenu
  },
  mounted() {
    this.myfreshdata();
    hashchangehandler();
    $("#mynavul").click(hashchangehandler);
    $("#my主体").css("padding-top", $("#my导航栏").height());
    // window.mychangemenu();
    // mychangemenu();
  }
});
export default App;
</script>
<template>
  <div id="root">
    <div id="my导航栏" class="fixed-top container-fluid">
      <nav
        class="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
        role="navigation"
      >
        <div class="container-fluid">
          <div class="navbar-header">
            <a
              class="navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
              href="../index.html"
            >masx200的github主页</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#example-navbar-collapse"
              v-on:click="togglecollapsenavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav" id="mynavul" @click="myfreshdata">
              <li id="mynav1" v-bind:class="{ active: isActive1 }">
                <router-link
                  to="/"
                  class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                >基于VUE的首页</router-link>
              </li>
              <li id="mynav2" v-bind:class="{ active: isActive2 }">
                <router-link
                  to="/huami"
                  class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                >花密网页版</router-link>
              </li>
              <li id="mynav3" v-bind:class="{ active: isActive3 }">
                <router-link
                  to="/about"
                  class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                >关于VUE</router-link>
              </li>
              <li>
                <router-link
                  to="/vue-simple-global-state-store-manager"
                  class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                >适用于Vue的极简全局状态管理库</router-link>
              </li>
                <li>
                <router-link
                  to="/beautify-javascript"
                  class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                >美化javascript代码</router-link>
              </li>
              <li>
                <a
                  href="../index.html#/react-home"
                  class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                >基于react的首页</a>
              </li>
              <li class>
                <a
                  href="../index.html#/picalc"
                  class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                >圆周率计算多线程</a>
              </li>
              <!--  <li>
                <a
                  href="../index.html#/decoder"
                  class="nav-link mui-btn mui-btn-primary mui-btn-outlined"
                >JSfuck-and-hieroglyphy-Decoder-and-ENCODER</a>
              </li>-->
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="container" id="my主体" style="min-width: 100%;padding-top: 53px;">
      <router-view />
    </div>
  </div>
</template>


