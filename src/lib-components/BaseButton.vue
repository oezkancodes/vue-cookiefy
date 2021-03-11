<template>
  <button
    :class="[
      'button',
      secondary ? 'button__secondary' : 'button__primary',
    ]"
    @click="$emit('click')"
    v-text="text"
  ></button>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'BaseButton',

    props: {
      text: {
        type: String,
        default: 'Add text Prop',
      },

      secondary: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      ...mapGetters(['color']),
    },
  };
</script>

<style lang="scss" scoped>
  $color: var(--color);
  $grey: #989da0;
  $light-grey: #eceff1;

  button {
    position: relative;
    outline: none;
    height: 2.5rem;
    padding: 0 1rem;
    text-align: center;
    background: $color;
    border: 1px solid $color;
    color: white;
    cursor: pointer;
    box-shadow: 3px 3px 0 black;

    font: {
      weight: 600;
    }

    &:hover {
      top: 1px;
      left: 1px;
      box-shadow: 2px 2px 0 black;
    }

    &:active {
      color: rgba(0, 0, 0, 0.87);
      background-color: $grey;
      border-color: $grey;
      top: 3px;
      left: 3px;
      box-shadow: 0 0 0 black;
    }

    // Secondary
    &.button__secondary {
      background-color: $light-grey;
      border-color: $light-grey;
      color: rgba(0, 0, 0, 0.87);

      &:active {
        background-color: $grey;
        border-color: $grey;
      }
    }
  }
</style>
