<template>
  <demo-section>
    <demo-block title="按钮类型">
      <demo-row>
        <s-button>默认按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="info">信息按钮</s-button>
      </demo-row>
      <s-button type="danger">危险按钮</s-button>
      <s-button type="warning">警告按钮</s-button>
    </demo-block>
    <demo-block title="禁用按钮">
      <s-button disabled>禁用按钮</s-button>
      <s-button
        type="info"
        disabled
      >禁用按钮</s-button>
      <s-button
        type="danger"
        disabled
      >禁用按钮</s-button>
    </demo-block>
    <demo-block title="加载状态">
      <demo-row>
        <s-button loading></s-button>
        <s-button
          type="primary"
          loading
          loading-text="获取中..."
        >默认型按钮</s-button>
      </demo-row>
    </demo-block>
    <demo-block title="按钮尺寸">
      <demo-row>
        <s-button size="small">小型按钮</s-button>
        <s-button type="primary">普通按钮</s-button>
      </demo-row>
      <s-button
        type="info"
        size="large"
        @click="$toast.fail({
          message: 'sds',
          position: 'bottom'
        })"
      >大型按钮</s-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.s-demo-block {
  padding: 0 15px;
}
</style>
