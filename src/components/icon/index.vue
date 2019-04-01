<template>
  <i
    class="s-icon"
    :class="`s-icon-${name}`"
    :style="style"
  ></i>
</template>

<script>
export default {
  name: 's-icon',

  props: {
    name: String,
    size: String,
    color: {
      type: String,
      default: 'inherit'
    }
  },

  computed: {
    style() {
      return this.size || this.color
        ? {
            'font-size': this.size,
            color: this.color
          }
        : {};
    }
  }
};
</script>
