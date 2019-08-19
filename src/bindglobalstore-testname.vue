<template>
  <div>
    <p>
      testname:
      <input class="form-control" v-model="testname" />
    </p>
    <button class="btn btn-outline-success btn-lg" v-on:click="changevalue()">修改testname</button>
  </div>
</template>
<script>
import {
  initGlobalState,
  bindGlobalStore
} from "vue-simple-global-state-store-manager";
initGlobalState({
  globaltestname: "helloworld-使用全局状态管理"
});

var comp = {
  //   name: "",
  methods: {
    changevalue() {
      this.testname =
        Math.random() > 0.5 ? this.testname + "te--" : "--st" + this.testname;
    }
  },
  data() {
    return { testname: "helloworld-test使用全局状态管理" };
  }
};
// import Vue from "vue/dist/vue.esm.browser.min.js";
// var comfu = Vue.extend(comp);
// console.log(comfu);

// comfu.options = new Proxy(comfu.options, {
//   set(t, k, v) {
//     console.log(t, k, v);
//     // console.log(k, v);
//     return Reflect.set(t, k, v);
//   }
//   //   get(t, k, r) {
//   //     console.log(t, k, r);
//   //     return Reflect.get(t, k, r);
//   //   }
// });
var comfu = bindGlobalStore(
  {
    globaltestname: "testname"
  },
  //   Vue.extend
  comp
);
// console.log(comfu);
export default comfu;
</script>>