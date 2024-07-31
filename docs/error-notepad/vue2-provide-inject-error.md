---
outline: deep
---

# Vue2 provide/inject 响应式问题
---

### 问题描述
> [!NOTE]
> Vue2中，默认情况下，如果父组件直接注入数据不做任何处理，当改变父组件的数据时，子组件的数据不会同时发生改变。

### 解决方案
```js
// 父组件
provide() {
  return {
    parentName: () => this.name
  }
}

// 子组件
inject: ['parentName']
```
