import Vue from 'vue' // ./同级 ../上一级 @/src 根目录下
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios' //npm i axios --save



Vue.use(ElementUI);

Vue.config.productionTip = false // 阻止生产环境的按钮
Vue.prototype.$http =axios;
axios.defaults.baseURL = 'http://xxx'//设置全局地址

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
