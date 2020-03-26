// import { constants } from "crypto";
// console.log([bindglobalstoretestname, bindglobalstoretestnumber]);
import Vue from "vue";
// @ts-ignore
import bindglobalstoretestname from "./bindglobalstore-testname.vue";
// @ts-ignore
import bindglobalstoretestnumber from "./bindglobalstore-testnumber.vue";
// console.log([Vue.extend(bindglobalstoretestname),bindglobalstoretestname]);

const expcom = {
    mounted() {
        document.title = "适用于Vue的极简全局状态管理库";
    },
    name: "vue-simple-global-state-store-manager",
    components: {
        bindglobalstoretestname,
        // :

        // bindGlobalStore(
        //   {
        //     globaltestname: "testname"
        //   },
        //   bindglobalstoretestname
        // ),
        bindglobalstoretestnumber,
        // : bindGlobalStore(
        //   {
        //     globaltestnumber: "testnumber"
        //   },
        //   bindglobalstoretestnumber
        // )
    },
};
// console.log(expcom.components);
export default Vue.extend(expcom);
