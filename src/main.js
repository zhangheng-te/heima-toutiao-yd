import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入flexible
import 'amfe-flexible'

// 导入vant库
import Vant from 'vant'
import 'vant/lib/index.css'

import './styles/style.less'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
