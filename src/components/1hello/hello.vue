<template>
  <div>
    <h2
      class="hello__yellow"
      data-name="h2"
    >hello ui</h2>
    <slot name="header">this is slot555gog</slot>
  </div>
</template>

<script>
export default {
  name: "hello",
  mounted() {
    console.log("mounted");
  }
};
</script>

<style scoped>
</style>
