<template>
  <div class="checkbox__wrapper">
    <input
      :class="[field.readonly ? 'checkbox--readonly' : '']"
      type="checkbox"
      :checked="field.checked"
    />
    <label
      for="field"
      v-text="field.text"
      @click="onClickCheckbox"
    ></label>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',

    props: {
      field: {
        type: Object,
        required: true,
      },
    },

    methods: {
      onClickCheckbox() {
        if (!this.field.readonly) {
          this.field.checked = !this.field.checked;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  $color: var(--color);

  input[type='checkbox'] {
    display: none;

    & + label {
      position: relative;
      display: inline-flex;
      cursor: pointer;
      user-select: none;

      &::before {
        width: 2.5rem;
        height: 1.25rem;
        background-color: #eee;
        content: '';
        margin-right: 0.75rem;
      }

      &::after {
        width: 1rem;
        height: 1rem;
        background-color: #fff;
        content: '';
        box-shadow: 0 0 5px #aaa;
        position: absolute;
        left: 2px;
        top: 2px;
      }
    }

    &.checkbox--readonly + label:after {
      background-color: rgb(160, 160, 160);
    }

    &:checked + label:before {
      background-color: $color;
    }

    &:checked.checkbox--readonly + label:before {
      background-color: #dddddd;
    }

    &:checked + label:after {
      margin: 0 0 0 1.25rem;
    }
  }
</style>
