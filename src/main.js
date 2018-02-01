// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import axios from './axios'
import 'jquery'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  render: h => h(App),
  template: '<App/>',
  components: { App },
  meta: {
    keepAlive: store.state.Alive // 用户登录跳转时页面不被缓存
  }
})
