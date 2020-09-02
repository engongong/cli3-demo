import Vue from 'vue';
import vuex from 'vuex'
import count from './count'
Vue.use(vuex);
var store = new vuex.Store({
    modules:{
        count:count,
    }
})

export default store