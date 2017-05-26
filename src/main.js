import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './components/About.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: 'App'},
  {path: '', component: 'About'},
  
]


new Vue({
  el: '#app',
  render: h => h(App)
})


