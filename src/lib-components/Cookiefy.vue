<template>
  <div class="vue-cookie">
    <PrivacyDialog :lang="lang" />
    <CookieDialog :value="value" @accept="onAccept" />
  </div>
</template>

<script>
  import storeModule from '../store/storeModule';
  import { mapGetters } from 'vuex';
  import PrivacyDialog from './PrivacyDialog.vue';
  import CookieDialog from './CookieDialog.vue';

  export default {
    name: 'Cookiefy',

    components: { PrivacyDialog, CookieDialog },

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
        default:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illum ipsa quod labore iure. Quidem a pariatur illo porro exercitationem placeat, veniam alias molestias ea.',
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
        default: () => {
          return {
            accept: 'Accept',
            privacy: 'Privacy',
            close: 'Close',
          };
        },
      },

      privacyFields: {
        type: Object,
        default: () => {
          return {
            title: 'Privacy',
            fields: [
              {
                title: 'Essential Cookies',
                text:
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illum ipsa quod labore iure. Quidem a pariatur illo porro exercitationem placeat, veniam alias molestias ea.',
              },
              {
                title: 'Google Analytics',
                text:
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illum ipsa quod labore iure. Quidem a pariatur illo porro exercitationem placeat, veniam alias molestias ea.',
              },
            ],
          };
        },
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

    computed: {
      ...mapGetters(['show']),
    },

    created() {
      document.documentElement.style.setProperty(
        '--color',
        this.color
      );
      this.$store.registerModule(
        'vueCookiefy',
        storeModule
      );
      this.$store.commit('SET_COLOR', this.color);
      this.$store.commit('SET_INNER_TEXT', this.innerText);
      this.$store.commit(
        'SET_COOKIE_FIELDS',
        this.cookieFields
      );
      this.$store.commit(
        'SET_PRIVACY_FIELDS',
        this.privacyFields
      );
      this.$store.commit('SET_LANG', this.lang);
    },

    methods: {
      onAccept(fields) {
        this.$emit('accept', fields);
        this.$emit('input', false);
      },
    },
  };
</script>

<style lang="scss">
  .vue-cookie {
    font-family: inherit;
  }
</style>
