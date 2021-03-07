import Vue from 'vue';
import Vuex from 'vuex';
import Dev from './serve.vue';
import storeModule from '../src/store/storeModule';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    storeModule,
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
  store,
}).$mount('#app');
