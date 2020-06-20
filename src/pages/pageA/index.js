import Vue from 'vue';
import App from '../../App';
import router from './router';
import '../../assets/style/common.scss'
import store from '../../store/index.js';  //  得加.js，不然.$store.state.show初始为undefined
// import vuex from 'vuex';
// Vue.use(vuex);

// var store = new vuex.Store({
//     state:{
//         show:1
//     }
// })

import {
  Picker,
  Button
} from 'vant';
const vantComponents = [Picker, Button];
// 批量安装vant组件
vantComponents.reduce((accu, cur) => {
  return accu ? accu.use(cur) : Vue.use(cur);
}, null);


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


new Vue({
  store, //使用store
  router,
  render: h => h(App)
}).$mount('#app')
