<script>
  import Vue from 'vue';
  import { Cookiefy } from '@/entry';

  export default Vue.extend({
    name: 'ServeDev',
    components: {
      Cookiefy,
    },
  });
</script>

<template>
  <div id="app">
    <Cookiefy />
  </div>
</template>
