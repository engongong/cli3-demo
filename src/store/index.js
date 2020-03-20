import Vue from 'vue';
import vuex from 'vuex'
Vue.use(vuex);

var store = new vuex.Store({
    state:{
        show:1
    }
})

export default store