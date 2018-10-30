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
      meta: {
        title: "西西乐园"
      },
      component: HelloWorld
    },
    {
      path: "/vip",
      name: "Vip",
      meta: {
        title: "VIP 视频解析"
      },
      component: Vip
    }
  ]
});
