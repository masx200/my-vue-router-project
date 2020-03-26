import {
    initGlobalState,
    bindGlobalStore,
} from "@masx200/vue-simple-global-state-store-manager";

initGlobalState({
    globaltestnumber: 1000000000000 * Math.random(),
});
import Vue from "vue";

const comfu = Vue.extend({
    data() {
        return { testnumber: "2241777582" };
    },
    methods: {
        changevalue() {
            this.testnumber = this.testnumber + "" + Math.random() * 10;
        },
    },
});
export default bindGlobalStore(
    {
        globaltestnumber: "testnumber",
    },
    comfu
);
