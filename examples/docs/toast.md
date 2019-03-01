# Toast 请提示

## 代码演示

### 文字提示

```vue
Toast('提示文案')
```

### 加载提示

```vue
Toast.loading({ mask: true, message: '加载中...' })
```

### 成功/失败提示

```vue
Toast.success('成功文案') Toast.fail('失败文案')
```

### 组件内调用

引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 \$toast 方法，便于在组件内调用。

```vue
export default { mounted() { this.$toast('提示文案') } }
```

## 方法

| 方法名        | 参数             | 返回值     | 说明         |
| ------------- | ---------------- | ---------- | ------------ |
| Toast         | options\|message | toast 实例 | 展示提示     |
| Toast.loading | options\|message | toast 实例 | 展示加载提示 |
| Toast.success | options\|message | toast 实例 | 展示失败提示 |
| Toast.fail    | options\|message | toast 实例 | 展示失败提示 |

## 参数

| 参数        | 说明                          | 类型    | 默认值 | 可选值                    |
| ----------- | ----------------------------- | ------- | ------ | ------------------------- |
| type        | 提示类型                      | String  | text   | loading,success,fail,html |
| message     | 内容                          | String  | ''     | -                         |
| position    | 位置                          | String  | middle | top,bottom                |
| mask        | 是否显示背景蒙层              | Boolean | false  | -                         |
| duration    | 时长 ms,为 0 时，toast 不消失 | Number  | 3000   | -                         |
| forbidClick | 是否禁止背景点击              | Boolean | false  | -                         |
