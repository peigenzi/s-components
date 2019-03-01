<template>
  <demo-section>
    <demo-block title="文字提示">
      <s-button @click="$toast({
          message: '有蒙层的提示',
          position: 'bottom',
          mask: true
        })">提示</s-button>
      <s-button
        type="primary"
        @click="$toast('很长的提示文案很长的提示文案很长的提示文案很长的提示文案很长的提示文案')"
      >长提示</s-button>
    </demo-block>
    <demo-block title="成功/失败提示">
      <s-button
        type="info"
        @click="$toast.success(`成功`)"
      >成功</s-button>
      <s-button
        type="danger"
        @click="$toast.fail(`失败`)"
      >失败</s-button>
    </demo-block>
    <demo-block title="加载提示">
      <s-button
        type="warning"
        @click="$toast.loading({
        message: '2s 后消失',
        duration: 2000,
        forbidClick: true
      })"
      >加载</s-button>
    </demo-block>
    <demo-block title="传入 HTML">
      <s-button
        type="primary"
        @click="$toast({
          type: 'html',
          message: `<div style='padding: 20px'><h1 style='color:#f44;font-size:20px'># h1</h1><h2>## h2</h2></div>`
      })"
      >一段 HTML</s-button>
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
