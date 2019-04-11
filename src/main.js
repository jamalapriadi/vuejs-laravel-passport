import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Axios from 'axios'
import routes from './router'
import store from './store'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(Axios)

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' +token
}


const app = new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
})
