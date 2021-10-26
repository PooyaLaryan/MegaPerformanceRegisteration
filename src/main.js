import Vue from 'vue'
import App from './App.vue'
import style from './assets/Style/globalStyle.css'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.config.silent = true;
Vue.use(style)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
