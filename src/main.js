import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'
import antd from './antd/antd.js'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  antd,
  echarts,
  render: h => h(App),
}).$mount('#app')
