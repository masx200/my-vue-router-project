<template>
  <div>
    <p>
      testnumber:
      <input class="form-control" v-model="testnumber" />
    </p>

    <button class="btn btn-outline-success btn-lg" v-on:click="changevalue()">修改testnumber</button>
  </div>
</template>
<script>
import {
  initGlobalState,
  bindGlobalStore
} from "vue-simple-global-state-store-manager";

initGlobalState({
  globaltestnumber: 1000000000000 * Math.random()
});
import Vue from "vue/dist/vue.esm.browser.min.js";

var comfu = Vue.extend({
  data() {
    return { testnumber: "2241777582" };
  },
  methods: {
    changevalue() {
      this.testnumber = this.testnumber + "" + Math.random() * 10;
    }
  }
});
export default bindGlobalStore(
  {
    globaltestnumber: "testnumber"
  },
  comfu
);
</script>>