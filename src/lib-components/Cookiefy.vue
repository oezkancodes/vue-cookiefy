<template>
  <div class="vue-cookie">
    <Privacy
      v-model="showPrivacy"
      :color="color"
      :lang="lang"
      :privacyFields="privacyFields"
    />
    <Cookie
      v-model="value"
      :color="color"
      :innerText="innerText"
      :cookieFields="cookieFields"
      :lang="lang"
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

      innerText: {
        type: String,
        default: `
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Enim illum ipsa quod labore iure. Quidem a pariatur illo 
          porro exercitationem placeat, veniam alias molestias ea.
        `,
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

      lang: {
        default: {
          accept: 'Accept',
          privacy: 'Privacy',
          close: 'Close',
        },
      },

      privacyFields: {
        type: Array,
        default: () => [
          {
            title: 'Essential Cookies',
            text: `
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Enim illum ipsa quod labore iure. Quidem a pariatur illo 
              porro exercitationem placeat, veniam alias molestias ea.
            `,
          },
          {
            title: 'Google Analytics',
            text: `
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Enim illum ipsa quod labore iure. Quidem a pariatur illo 
              porro exercitationem placeat, veniam alias molestias ea.
            `,
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
