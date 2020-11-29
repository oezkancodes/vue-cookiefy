<template>
  <div class="vue-cookie">
    <Privacy
      v-model="showPrivacy"
      :color="color"
      :privacyFields="privacyFields"
    />
    <Cookie
      v-model="value"
      :color="color"
      :cookieFields="cookieFields"
      @accept="onAccept"
      @privacy="onClickPrivacy"
    />
  </div>
</template>

<script>
  import Privacy from './Privacy.vue';
  import Cookie from './Cookie.vue';

  export default {
    components: { Privacy, Cookie },

    props: {
      value: {
        type: Boolean,
        default: true,
        required: true,
      },

      color: {
        type: String,
        default: '#ff3d17',
      },

      cookieFields: {
        type: Array,
        default: () => [
          {
            text: 'Essential Cookies',
            checked: true,
            readonly: true,
          },
          {
            text: 'Google Analytics',
            checked: true,
            readonly: false,
          },
        ],
      },

      privacyFields: {
        type: Array,
        default: () => [
          {
            title: 'Essential Cookies',
            text:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id sed quas corporis, ullam error voluptatum non maxime expedita facere omnis quisquam molestias cumque quos voluptas debitis dicta hic dolore.',
          },
        ],
      },
    },

    data() {
      return {
        showPrivacy: false,
      };
    },

    watch: {
      value(newValue) {
        this.setShowCookiefy(newValue);
      },
    },

    mounted() {
      document.documentElement.style.setProperty(
        '--color',
        this.color
      );
    },

    methods: {
      onAccept(fields) {
        this.$emit('accept', fields);
        this.$emit('input', false);
      },

      onClickPrivacy() {
        this.showPrivacy = true;
      },

      setShowCookiefy() {},
    },
  };
</script>

<style lang="scss">
  .vue-cookie {
    font-family: inherit;
  }
</style>
