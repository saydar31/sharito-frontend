import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';
import VueMeta from 'vue-meta';
import VueExpandableImage from 'vue-expandable-image'
import store from './store';
import './ml'
import browserDetect from "vue-browser-detect-plugin";
import ScrollLoader from 'vue-scroll-loader';
import VCalendar from 'v-calendar';

Vue.use(ScrollLoader);
Vue.use(VCalendar);


Vue.use(VeeValidate);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(browserDetect);


Vue.use({
  install: function(Vue, options){
    Vue.prototype.$jQuery = require('jquery');
  }
});
Vue.use(VueExpandableImage)

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
