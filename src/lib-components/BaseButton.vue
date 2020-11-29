<template>
  <button
    :class="secondary ? 'secondary' : ''"
    @click="$emit('click')"
    v-text="text"
  ></button>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: 'Add text Prop',
      },

      secondary: {
        type: Boolean,
        default: false,
      },

      icon: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  $color: var(--color);

  button {
    outline: none;
    height: 2.5rem;
    padding: 0 1rem;
    text-align: center;
    border-radius: 42px;
    background: $color;
    border: 2px solid $color;
    color: white;
    cursor: pointer;
    transition: all 0.25s ease;

    font: {
      weight: 600;
    }

    &:hover {
      color: $color;
      background: white;
    }

    &:active {
      color: rgba(0, 0, 0, 0.87);
      background-color: #989da0;
      border-color: #989da0;
    }

    &:after {
      content: '';
    }

    // filled
    &.secondary {
      background-color: #eceff1;
      border-color: #eceff1;
      color: rgba(0, 0, 0, 0.87);
      &:hover {
        background-color: #cdd1d3;
        border-color: #cdd1d3;
      }
      &:active {
        background-color: #989da0;
        border-color: #989da0;
      }
    }
  }
</style>
