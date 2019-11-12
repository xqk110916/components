import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from './axios'

// 引入自己封装的公共函数
import req from './public/req-axios.js'     //封装axios的各种请求
import common from './public/public.js'     //封装axios的各种请求

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.use(Vant);
Vue.use(req);
Vue.use(common);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
