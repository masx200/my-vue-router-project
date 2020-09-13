import Vue from "vue";
import bindglobalstoretestname from "./bindglobalstore-testname.vue";
import bindglobalstoretestnumber from "./bindglobalstore-testnumber.vue";
const expcom = {
    mounted() {
        document.title = "适用于Vue的极简全局状态管理库";
    },
    name: "vue-simple-global-state-store-manager",
    components: {
        bindglobalstoretestname,
        bindglobalstoretestnumber,
    },
};
export default Vue.extend(expcom);
