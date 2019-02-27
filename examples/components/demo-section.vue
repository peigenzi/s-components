<template>
  <section class="s-demo-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "demo-section"
};
</script>

<style scoped>
.s-demo-section {
  min-height: 100vh;
  padding-bottom: 20px;
  box-sizing: border-box;
}
</style>
