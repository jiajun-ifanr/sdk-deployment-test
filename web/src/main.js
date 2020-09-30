import Vue from 'vue'
import App from './App.vue'
import Baas from 'minapp-sdk'

Baas.init('a4d2d62965ddb57fa4d6')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
