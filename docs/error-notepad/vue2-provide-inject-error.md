---
outline: deep
---

# Vue2 provide/inject 响应式问题
---

### 问题描述
> [!NOTE]
> 当我们在开发过程中，有时会对接口返回的result对象进行结构赋值，然后使用我们解构出来的值去做一些操作。我们习惯性的会按如下写法处理，但由于对解构赋值了解的不深入，往往埋下了坑。

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
:::
