<template>
  <demo-section>
    <demo-block title="基础用法">
      <s-cell title="单元格"></s-cell>
      <s-cell value="内容"></s-cell>
      <s-cell
        title="单元格"
        value="内容"
      ></s-cell>
      <s-cell
        title="单元格"
        value="内容"
        label="描述信息"
      ></s-cell>
    </demo-block>
    <demo-block title="展示图标">
      <s-cell
        title="单元格"
        value="内容"
        icon="map-pin"
        icon-color="red"
      ></s-cell>
    </demo-block>
    <demo-block title="展示箭头">
      <s-cell
        title="单元格"
        is-link
        @click="$toast('点击了')"
      ></s-cell>
      <s-cell
        title="单元格"
        value="内容"
        icon="map-pin"
        icon-color="green"
        is-link
      ></s-cell>
    </demo-block>
    <demo-block title="页面跳转">
      <s-cell
        title="去按钮页"
        to="/button"
        is-link
      ></s-cell>
    </demo-block>
    <demo-block title="高级用法">
      <s-cell icon="download">
        <span slot="title">
          <s-button type="info" size="small">slot title</s-button>
        </span>
      </s-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.s-demo-block .s-demo-block__title {
  padding-left: 15px;
}
</style>
