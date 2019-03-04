# cell 单元格

## 代码演示

### 基础用法

```vue
<s-cell title="单元格" value="内容" />
<s-cell title="单元格" value="内容" label="描述信息" />
```

### 只设置 value

内容会左对齐

```vue
<s-cell value="内容" />
```

### 左侧展示图标

```vue
<s-cell title="单元格" icon="phone" />
```

### 右侧箭头

`is-link` 属性会在右侧展示箭头

```vue
<s-cell title="单元格" is-link></s-cell>
<s-cell title="单元格" is-link value="内容" />
```

### 高级用法

```vue
<s-cell value="内容" icon="phone" is-link>
  <template slot="title">
    <span class="custom-text">单元格</span>
    <s-button>按钮</s-button>
  </template>
</s-cell>
```

### Cell API

| 参数      | 说明                           | 类型    | 默认值 | 可选值 |
| --------- | ------------------------------ | ------- | ------ | ------ |
| icon      | 左侧图标                       | String  | -      | -      |
| title     | 左侧标题                       | String  | -      | -      |
| value     | 右侧内容                       | String  | -      | -      |
| label     | 标题下方描述                   | String  | -      | -      |
| url       | 跳转链接                       | String  | -      | -      |
| to        | 跳转，vue-router               | String  | Object | -      |
| replace   | 跳转时是否替换当前 history     | String  | false  | -      |
| border    | 是否显示内边框                 | Boolean | true   | -      |
| clickable | 是否开启点击反馈               | Boolean | false  | -      |
| is-link   | 是否展示右侧箭头并开启点击反馈 | Boolean | false  | -      |
| required  | 是否显示表单必填符号           | Boolean | false  | -      |

### Cell 事件

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| click  | 点击 cell 时触发 | -    |

### Cell Slot

| 名称  | 说明           |
| ----- | -------------- |
| title | 自定义 title   |
