import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import api from "./plugins/api"
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  i18n,
  api,
  render: h => h(App)
}).$mount('#app')
