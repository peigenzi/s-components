<template>
  <demo-section>
    <demo-block title="基础用法">
      <s-radio name="1" v-model="radio">单选框1</s-radio>
      <s-radio name="2" v-model="radio">单选框2</s-radio>
    </demo-block>
    <demo-block title="禁用">
      <s-radio name="1" disabled v-model="radio">单选框1</s-radio>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data(){
    return {
      radio: '1'
    }
  }
};
</script>

<style lang="scss">
.s-demo-block .s-demo-block__title {
  padding-left: 15px;
}
</style>
