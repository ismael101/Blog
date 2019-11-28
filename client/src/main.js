import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import AOS from 'aos'
import "aos/dist/aos.css"
import store from './store'
import router from './router'
import article from '../services/article'
Vue.config.productionTip = false

Vue.prototype.$article = article

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  created(){
    AOS.init()
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
