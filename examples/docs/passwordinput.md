# 密码输入框

## 代码演示

```vue
<s-password-input :value="value" info="6位数字" @focus="showKey = true">
</s-password-input>
```

## API

| 参数       | 说明               | 类型   | 默认值 | 可选值 |
| ---------- | ------------------ | ------ | ------ | ------ |
| value      | 密码值             | String | ''     | -      |
| length     | 密码最大长度       | Number | 6      | -      |
| info       | 输入框下方提示     | String | -      | -      |
| error-info | 输入框下方错误提示 | String | -      | -      |

## Event

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| focus  | 输入框聚焦时触发 | -    |
