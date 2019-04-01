<template>
  <s-icon
    class="s-loading"
    :name=type
    :size="size"
    :color="color"
  ></s-icon>
</template>

<script>
export default {
  name: 's-loading',

  props: {
    type: {
      type: String,
      default: 'loading-3'
    },
    size: String,
    color: {
      type: String,
      default: 'black'
    }
  }
};
</script>

