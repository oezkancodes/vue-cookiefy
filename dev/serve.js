import Vue from 'vue';
import Vuex from 'vuex';
import Dev from './serve.vue';

Vue.use(Vuex);

const store = new Vuex.Store({});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
  store,
}).$mount('#app');
