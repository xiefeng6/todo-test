import Vue from '../js/vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})