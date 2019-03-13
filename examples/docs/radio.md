# Radio 单选框

## 代码演示

### 基础用法

通过`v-model`绑定值即可。当`Radio`选中时，绑定的值即为`Radio`中`name`属性设置的值。

```vue
<s-radio name="1" v-model="radio">单选框 1</s-radio>
<s-radio name="2" v-model="radio">单选框 2</s-radio>
```

```js
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

### 禁用状态

设置`disabled`属性即可，此时`Radio`不能点击。

```vue
<s-radio name="1" v-model="radio" disabled>单选框 1</s-radio>
```

### Radio 组

需要与`s-radio-group`一起使用，在`s-radio-group`通过`v-model`来绑定当前选中的值。

```vue
<s-radio-group v-model="radio">
  <s-radio name="1">单选框 1</s-radio>
  <s-radio name="2">单选框 2</s-radio>
</s-radio-group>
```

### Radio API

| 参数     | 说明                          | 类型      | 默认值  | 可选值 |
| -------- | ----------------------------- | --------- | ------- | ------ |
| disabled | 是否禁用单选框                | `Boolean` | `false` | -      |
| name     | 根据这个来判断 radio 是否选中 | `Boolean` | `false` | -      |

### RadioGroup API

| 参数     | 说明           | 类型      | 默认值  | 可选值 |
| -------- | -------------- | --------- | ------- | ------ |
| disabled | 是否禁用单选框 | `Boolean` | `false` | -      |

### RadioGroup Event

| 事件名称 | 说明                     | 回调参数     |
| -------- | ------------------------ | ------------ |
| change   | 当绑定值变化时触发的事件 | 当前组件的值 |