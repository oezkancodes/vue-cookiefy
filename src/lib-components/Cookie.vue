<template>
  <div v-if="value" class="vue-cookie__wrapper">
    <div class="vue-cookie__dialog">
      <div class="vue-cookie__content">
        <!-- title -->
        <section class="vue-cookie__title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 24 24"
            :style="{ fill: color }"
          >
            <path
              d="M21 12.29C21 12.19 21 12.1 21 12C21 11.5 20.96 11 20.87 10.5C20.6 10 20 10 20 10H18V9C18 8 17 8 17 8H15V7C15 6 14 6 14 6H13V4C13 3 12 3 12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C12.1 21 12.19 21 12.29 21C12.11 20.36 12 19.69 12 19C12 18.86 12 18.73 12 18.59C11.75 18.84 11.4 19 11 19C10.17 19 9.5 18.33 9.5 17.5S10.17 16 11 16C11.59 16 12.1 16.35 12.34 16.84C13.25 14.03 15.89 12 19 12C19.69 12 20.36 12.11 21 12.29M6.5 13C5.67 13 5 12.33 5 11.5S5.67 10 6.5 10 8 10.67 8 11.5 7.33 13 6.5 13M9.5 9C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6 11 6.67 11 7.5 10.33 9 9.5 9M11.5 14C10.67 14 10 13.33 10 12.5S10.67 11 11.5 11 13 11.67 13 12.5 12.33 14 11.5 14M22.7 19.6V18.6L23.8 17.8C23.9 17.7 24 17.6 23.9 17.5L22.9 15.8C22.9 15.7 22.7 15.7 22.6 15.7L21.4 16.2C21.1 16 20.8 15.8 20.5 15.7L20.3 14.4C20.3 14.3 20.2 14.2 20.1 14.2H18.1C17.9 14.2 17.8 14.3 17.8 14.4L17.6 15.7C17.3 15.9 17.1 16 16.8 16.2L15.6 15.7C15.5 15.7 15.4 15.7 15.3 15.8L14.3 17.5C14.3 17.6 14.3 17.7 14.4 17.8L15.5 18.6V19.6L14.4 20.4C14.3 20.5 14.2 20.6 14.3 20.7L15.3 22.4C15.4 22.5 15.5 22.5 15.6 22.5L16.8 22C17 22.2 17.3 22.4 17.6 22.5L17.8 23.8C17.9 23.9 18 24 18.1 24H20.1C20.2 24 20.3 23.9 20.3 23.8L20.5 22.5C20.8 22.3 21 22.2 21.3 22L22.5 22.4C22.6 22.4 22.7 22.4 22.8 22.3L23.8 20.6C23.9 20.5 23.9 20.4 23.8 20.4L22.7 19.6M19 20.5C18.2 20.5 17.5 19.8 17.5 19S18.2 17.5 19 17.5 20.5 18.2 20.5 19 19.8 20.5 19 20.5Z"
            />
          </svg>
        </section>

        <!-- text -->
        <section class="vue-cookie__text">
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Enim illum ipsa quod labore
          iure. Quidem a pariatur illo porro exercitationem
          placeat, veniam alias molestias ea. Deserunt
        </section>

        <!-- fields -->
        <section class="vue-cookie__fields">
          <Checkbox
            v-for="field in cookieFields"
            :key="field.text"
            :field="field"
          />
        </section>

        <!-- actions -->
        <section class="vue-cookie__actions">
          <BaseButton
            filled
            text="Accept"
            :color="color"
            @click="onAccept"
          />
          <BaseButton
            text="Privacy"
            :color="color"
            @click="onClickPrivacy"
          />
        </section>

        <section class="vue-cookie__credits">
          <svg
            :style="{
              color,
              width: '24px',
              height: '24px',
              cursor: 'pointer',
            }"
            viewBox="0 0 24 24"
            @click="onClickCredits"
          >
            <path
              fill="currentColor"
              d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import Checkbox from './Checkbox.vue';
  import BaseButton from './BaseButton.vue';

  export default {
    components: { Checkbox, BaseButton },

    props: {
      value: {
        type: Boolean,
        required: true,
      },
      cookieFields: {
        type: Array,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        fields: this.cookieFields,
      };
    },

    methods: {
      onAccept() {
        if (this.cookieFields.length > 0) {
          const fields = this.cookieFields.map((field) => {
            return {
              text: field.text,
              checked: field.checked,
            };
          });
          this.$emit('accept', fields);
        }
      },

      onClickPrivacy() {
        this.$emit('privacy');
      },

      onClickCredits() {
        window.open(
          'https://github.com/oezkancodes',
          '_blank'
        );
      },
    },
  };
</script>

<style lang="scss">
  .vue-cookie__wrapper {
    color: rgba(0, 0, 0, 0.87);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 9999;

    .vue-cookie__dialog {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;
      width: 100%;
      border: 1px solid rgb(201, 201, 201);
      box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      user-select: none;

      .vue-cookie__content {
        position: relative;
        padding: 1.5rem;
        max-width: 600px;

        .vue-cookie__credits {
          position: absolute;
          top: 2rem;
          right: 2rem;
        }

        .vue-cookie__title {
          svg {
            margin: 0 0 0 -0.3rem;
            height: 4rem;
            width: 4rem;
          }
        }

        .vue-cookie__text {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.5rem;
        }

        .vue-cookie__fields {
          .checkbox__wrapper {
            margin-bottom: 0.5rem;
          }
        }
        .vue-cookie__actions {
          margin-top: 1.25rem;
          display: flex;
          align-items: center;
          button {
            margin-right: 0.25rem;
          }
          button:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
