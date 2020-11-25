import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'
import antd from './antd/antd.js'

Vue.config.productionTip = false

new Vue({
  router,
  antd,
  render: h => h(App),
}).$mount('#app')
