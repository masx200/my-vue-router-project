import {
    initGlobalState,
    bindGlobalStore
} from '@masx200/vue-simple-global-state-store-manager';
initGlobalState({ globaltestname: 'helloworld-使用全局状态管理' });
const comp = {
    methods: {
        changevalue() {
            this.testname = Math.random() > 0.5 ? this.testname + 'te--' : '--st' + this.testname;
        }
    },
    data() {
        return { testname: 'helloworld-test使用全局状态管理' };
    }
};
const comfu = bindGlobalStore({ globaltestname: 'testname' }, comp);
export default comfu;