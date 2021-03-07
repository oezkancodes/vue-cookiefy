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

  .button {
    outline: none;
    height: 2.5rem;
    padding: 0 1rem;
    text-align: center;
    border-radius: 42px;
    background: $color;
    border: 1px solid $color;
    color: white;
    cursor: pointer;
    transition: all 0.125s ease;

    font: {
      weight: 600;
    }

    &:hover {
      color: $color;
      background: white;
    }

    &:active {
      color: rgba(0, 0, 0, 0.87);
      background-color: $grey;
      border-color: $grey;
    }

    &:after {
      content: '';
    }

    // filled
    &.button__secondary {
      background-color: $light-grey;
      border-color: $light-grey;
      color: rgba(0, 0, 0, 0.87);

      &:hover {
        background-color: #cdd1d3;
        border-color: #cdd1d3;
      }
      &:active {
        background-color: $grey;
        border-color: $grey;
      }
    }
  }
</style>
