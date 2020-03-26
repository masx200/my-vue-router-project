import {
    initGlobalState,
    bindGlobalStore,
} from "@masx200/vue-simple-global-state-store-manager";
initGlobalState({
    globaltestname: "helloworld-使用全局状态管理",
});

const comp = {
    //   name: "",
    methods: {
        changevalue() {
            this.testname =
                Math.random() > 0.5
                    ? this.testname + "te--"
                    : "--st" + this.testname;
        },
    },
    data() {
        return { testname: "helloworld-test使用全局状态管理" };
    },
};
// import Vue from "vue";
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
const comfu = bindGlobalStore(
    {
        globaltestname: "testname",
    },
    //   Vue.extend
    comp
);
// console.log(comfu);
export default comfu;
