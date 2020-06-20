import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [{
  path: '/',
  name: 'home',
  meta: {
    'title': '诗',
  },
  component: () => import('./Home.vue'),
  children: [{
    path: '/list/:id',
    name: 'list',
    meta: {
      'title': '诗',
    },
    component: () => import('./List.vue')
  }]
}]

export default new VueRouter({
  routes
})
