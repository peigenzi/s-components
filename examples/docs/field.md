# 输入框

## 代码演示

```vue

```

## API

| 参数          | 说明                           | 类型    | 默认值 | 可选值                                               |
| ------------- | ------------------------------ | ------- | ------ | ---------------------------------------------------- |
| type          | 输入框类型                     | String  | text   | number email textarea tel datetime date password url |
| value         | 输入框值                       | String  | -      | -                                                    |
| label         | 输入框标签                     | String  | -      | -                                                    |
| disabled      | 是否禁用输入框                 | Boolean | false  | -                                                    |
| error         | 输入框是否有错误               | Boolean | false  | -                                                    |
| error-message | 底部错误提示文案               | String  | ''     | -                                                    |
| autosize      | 自适应高度，只对 textarea 有效 | Boolean | false  | -                                                    |
| icon          | 输入框尾部图标                 | String  | -      | -                                                    |

## Event

默认支持 Input 标签所有的原生事件，如 focus、blur、keypress 等

| 事件名     | 说明               | 参数 |
| ---------- | ------------------ | ---- |
| click-icon | 点击尾部图标时触发 | -    |

## Slot

| 名称 | 说明        |
| ---- | ----------- |
| icon | 自定义 icon |
