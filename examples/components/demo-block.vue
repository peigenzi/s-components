<template>
  <section class="s-demo-block">
    <h2 class="s-demo-block__title">{{title}}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "demo-block",

  props: {
    title: String
  }
};
</script>

<style scoped lang="scss">
.s-demo-block__title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
  padding: 35px 15px 15px 0;
  &:first {
    padding-top: 20px;
  }
}
</style>
