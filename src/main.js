import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VideoBg from 'vue-videobg';

Vue.config.productionTip = false
Vue.component('video-bg', VideoBg)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
