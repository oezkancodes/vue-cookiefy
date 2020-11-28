<template>
  <button
    :class="filled ? 'filled' : ''"
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
      filled: {
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
    border-radius: 40px;
    background: #fff;
    border: 2px solid $color;
    color: $color;
    cursor: pointer;
    transition: all 0.25s ease;

    font: {
      weight: 600;
    }

    &:hover {
      color: white;
      background: $color;
    }

    &:active {
      color: white;
    }

    &:after {
      content: '';
    }

    // filled
    &.filled {
      background-color: $color;
      color: white;
      &:hover {
        color: white;
      }
      &:active {
        color: $color;
        background: white;
      }
    }
  }
</style>
