<template>
  <div>
    <h2>
      <a href="https://github.com/masx200/vue-simple-global-state-store-manager">Vue 极简全局状态管理库</a>
      <p>
        <a
          href="  https://github.com/masx200/vue-simple-global-state-store-manager"
        >https://github.com/masx200/vue-simple-global-state-store-manager</a>
      </p>
    </h2>
    <hr />
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div>
          <h1>test-hello-</h1>

          <bindglobalstoretestname />
          <bindglobalstoretestnumber />
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div>
          <h1>test-world-</h1>
          <bindglobalstoretestname />
          <bindglobalstoretestnumber />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  initGlobalState,
  bindGlobalStore
} from "vue-simple-global-state-store-manager";
import bindglobalstoretestname from "./bindglobalstore-testname.vue";
import bindglobalstoretestnumber from "./bindglobalstore-testnumber.vue";
// import { constants } from "crypto";
// console.log([bindglobalstoretestname, bindglobalstoretestnumber]);

const expcom = {
  components: {
    bindglobalstoretestname: bindGlobalStore(
      {
        globaltestname: "testname"
      },
      bindglobalstoretestname
    ),

    bindglobalstoretestnumber: bindGlobalStore(
      {
        globaltestnumber: "testnumber"
      },
      bindglobalstoretestnumber
    )
  }
};
// console.log(expcom);
export default expcom;
</script>