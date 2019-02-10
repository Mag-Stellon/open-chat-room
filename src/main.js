import Vue from 'vue'
import Chat from './Chat.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(Chat),
}).$mount('#app')
