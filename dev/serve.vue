<template>
  <div id="app">
    <button @click="cookiefy = true">Open</button>
    <Cookiefy v-model="cookiefy" />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Cookiefy } from '@/entry';

  export default Vue.extend({
    name: 'ServeDev',
    components: {
      Cookiefy,
    },

    data() {
      return {
        cookiefy: true,
      };
    },
  });
</script>
