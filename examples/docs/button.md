# button 按钮

## 代码演示

### 按钮类型

通过 `type` 设置。支持 `default`,`primary`,`info`,`danger`,`warning`类型。

```vue
<s-button>默认按钮</s-button> <s-button type="info">信息按钮</s-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮。

```vue
<s-button type="info" disabled>信息按钮</s-button>
```

### 加载状态

通过 `loading` 属性设置按钮加载状态。

```vue
<s-button loading>普通按钮</s-button>
<s-button loading loading-text="获取中...">主要按钮</s-button>
```

### 按钮尺寸

通过 `size` 设置。支持 `large`, `normal`,`small`。不设置则默认 `normal` 尺寸。

```vue
<s-button type="info" size="large">信息按钮</s-button>
```

### API

| 参数         | 说明                                     | 类型    | 默认值    |
| ------------ | ---------------------------------------- | ------- | --------- |
| type         | 类型，可选值:primary,info,danger,warning | String  | default   |
| size         | 尺寸，可选值:large,normal,small          | String  | normal    |
| disabled     | 是否禁用按钮                             | Boolean | false     |
| loading      | 是否显示加载状态                         | Boolean | false     |
| loading-text | 加载状态提示文字                         | String  | 加载中... |
| tag          | 以何种 HTML 标签渲染按钮                 | String  | button    |

### Event

| 事件名 | 说明                       | 参数 |
| ------ | -------------------------- | ---- |
| click  | 按钮点击事件，禁用时不触发 | -    |
