// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* Http请求使用 axios */
import axios from 'axios'
Vue.prototype.$axios = axios
//Object.defineProperty(Vue.prototype, '$axios', {value: axios})
/* vue2 设置网页title */
import VueWechatTitle from "vue-wechat-title"; 
Vue.use(VueWechatTitle);

Vue.config.productionTip = false

/*路由发生变化事件 */
router.beforeEach((to, from, next) => {
  console.log(to);
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
