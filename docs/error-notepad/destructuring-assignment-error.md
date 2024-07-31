---
outline: deep
---

# 解构赋值默认值问题
---

### 问题描述
> [!NOTE]
> Vue2中，默认情况下，如果父组件直接注入数据不做任何处理，当改变父组件的数据时，子组件的数据不会同时发生改变。
```js
// 原始业务代码
const result = null
const { thomas = 1 } = result

// Babel转为es5后的实际代码
"use strict";
var res = null;
var _res$thomas = res.thomas;
thomas = _res$thomas === void 0 ? 1 : _res$thomas; // [!code warning]
```

### 原因讲解及解决方案
> [!TIP]
> 从上述代码我们可以看到，被编译后的代码在对默认初始值赋值时，判断的是`===void 0`。即只有对应的值强等于`undefined`时，才会进行默认值的赋值。因此，当某些特殊情况下后端接口返回值为null时，就会导致前端代码报错了。**这里我们可以使用如下写法兼容处理**
```js
// 原始业务代码
const result = null
const { thomas = 1 } = result || {}
```
