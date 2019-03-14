<template>
  <div class="s-radio-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "s-radio-group",

  props: {
    value: {},
    disabled: Boolean
  },

  watch: {
    value(value) {
      this.$emit("change", value);
    }
  }
};
</script>
