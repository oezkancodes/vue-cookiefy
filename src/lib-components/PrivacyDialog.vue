<template>
  <div v-if="showPrivacy" class="privacy__wrapper">
    <div class="privacy__dialog">
      <div class="privacy__content">
        <header v-text="lang.infoTitle"></header>
        <article>
          <section
            v-for="(field, i) in privacyFields"
            :key="i"
          >
            <h1 v-html="field.title"></h1>
            <p v-html="field.text"></p>
          </section>
        </article>
        <div class="privacy__actions">
          <BaseButton
            :text="lang.close"
            @click="onClosePrivacy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import BaseButton from './BaseButton.vue';

  export default {
    name: 'PrivacyDialog',

    components: { BaseButton },

    computed: {
      ...mapGetters([
        'showPrivacy',
        'privacyFields',
        'lang',
      ]),
    },

    methods: {
      onClosePrivacy() {
        this.$store.commit('SET_SHOW_PRIVACY', false);
      },
    },
  };
</script>

<style lang="scss">
  .privacy__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;

    .privacy__dialog {
      background-color: white;
      max-width: 500px;
      border: 1px solid rgb(200, 200, 200);
      box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1);

      .privacy__content {
        header {
          font-size: 1.25rem;
          border-bottom: 1px solid #cdd1d3;
        }

        article {
          max-height: 50vh;
          overflow-y: auto;
        }

        .privacy__actions {
          border-top: 1px solid #cdd1d3;
          text-align: right;
        }

        header,
        article,
        .privacy__actions {
          padding: 1rem 1.5rem;
        }
      }
    }
  }
</style>
