<template>
  <section class="s-demo-section">
    <section class="s-demo-block">
      <h2 class="s-demo-block__title">按钮类型</h2>
      <div class="s-demo-row">
        <s-button>默认按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="info">信息按钮</s-button>
        <s-button type="danger">危险按钮</s-button>
        <s-button type="warning">警告按钮</s-button>
      </div>
    </section>
    <section class="s-demo-block">
      <h2 class="s-demo-block__title">禁用状态</h2>
      <div class="s-demo-row">
        <s-button disabled>禁用按钮</s-button>
        <s-button type="info" disabled>禁用按钮</s-button>
        <s-button type="danger" disabled>禁用按钮</s-button>
      </div>
    </section>
    <section class="s-demo-block">
      <h2 class="s-demo-block__title">按钮尺寸</h2>
      <div class="s-demo-row">
        <s-button size="small">小型按钮</s-button>
        <s-button type="primary">默认型按钮</s-button>
        <s-button type="info" size="large">大型按钮</s-button>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.s-demo-section {
  min-height: 100vh;
  padding-bottom: 20px;
  box-sizing: border-box;
}

.s-demo-block {
  padding: 0 15px;
}

.s-demo-block__title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69, 90, 100, 0.6);
  padding: 35px 15px 15px;
  &:first {
    padding-top: 20px;
  }
}
</style>
