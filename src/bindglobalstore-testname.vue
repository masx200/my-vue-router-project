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
export default {
  methods: {
    changevalue() {
      this.testname = this.testname + "-test";
    }
  },
  data() {
    return { testname: "helloworld-test使用全局状态管理" };
  }
};
</script>>