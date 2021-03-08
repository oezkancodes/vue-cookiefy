<template>
  <div class="checkbox__wrapper">
    <input
      :class="field.readonly ? 'checkbox--readonly' : ''"
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
  }

  input[type='checkbox'] + label {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
  }

  input[type='checkbox'] + label:before {
    transition: background-color 0.2s linear;
    width: 2.5rem;
    height: 1.25rem;
    border-radius: 30px;
    background-color: #eee;
    content: '';
    margin-right: 0.75rem;
  }

  input[type='checkbox'] + label:after {
    width: 1rem;
    height: 1rem;
    border-radius: 2rem;
    background-color: #fff;
    content: '';
    transition: margin 0.1s linear;
    box-shadow: 0px 0px 5px #aaa;
    position: absolute;
    left: 2px;
    top: 2px;
  }

  input[type='checkbox'].checkbox--readonly + label:after {
    background-color: rgb(160, 160, 160);
  }

  input[type='checkbox']:checked + label:before {
    background-color: $color;
  }

  input[type='checkbox']:checked.checkbox--readonly
    + label:before {
    background-color: #dddddd;
  }

  input[type='checkbox']:checked + label:after {
    margin: 0 0 0 1.25rem;
  }
</style>
