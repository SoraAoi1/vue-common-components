import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/style/reset.less'
import './assets/style/common.less'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
