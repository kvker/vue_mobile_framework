// iHappy 2018-3-9 赵越
import App from './App.vue'
import router from './route/index'
import store from './store/index'
import mixinWatch from 'mixin/watch';

// Vue 项目配置
Vue.prototype.$config = require('./config/index')
Vue.mixin(mixinWatch) // 全局混入

// 组件统一引入
import 'component/global.js'

/**
 * Vue 全局初始化
 */
window.app = new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App />',
})