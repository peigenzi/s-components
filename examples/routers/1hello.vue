<template>
  <div>
    <s-hello>
      <h2>My H2</h2>
    </s-hello>
    <s-button
      tag="a"
      type="info"
      size="large"
      @click="handleClick"
    >主要按钮</s-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("click");
    }
  }
};
</script>

<style scoped>
</style>
