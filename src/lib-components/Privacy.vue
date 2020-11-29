<template>
  <div v-if="value" class="privacy__wrapper">
    <div class="privacy__dialog">
      <div class="privacy__content">
        <header v-text="lang.privacy"></header>
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
            :color="color"
            @click="onClosePrivacy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseButton from './BaseButton.vue';

  export default {
    components: { BaseButton },

    props: {
      value: {
        type: Boolean,
        required: true,
      },

      privacyFields: {
        type: Array,
        required: true,
      },

      lang: {
        type: Object,
        required: true,
      },

      color: {
        type: String,
        required: true,
      },
    },

    methods: {
      onClosePrivacy() {
        this.$emit('input', false);
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
    z-index: 10000;

    .privacy__dialog {
      background-color: white;
      width: 100%;
      max-width: 400px;
      border: 1px solid rgb(200, 200, 200);
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1);
      user-select: none;

      .privacy__content {
        header {
          font-size: 1.25rem;
          border-bottom: 1px solid #cdd1d3;
        }

        article {
          max-height: 500px;
          overflow-y: auto;

          h1 {
            margin-top: 0;
            margin-bottom: 0.5rem;
            line-height: 1.5;
            font-size: 1.25rem;
          }
          p {
            line-height: 1.5;
          }
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
