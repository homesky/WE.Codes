import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vip from '@/components/Vip'

Vue.use(Router)

export default new Router({
  mode: "history", //去掉url中的#
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/vip",
      name: "Vip",
      component: Vip
    }
  ]
});
