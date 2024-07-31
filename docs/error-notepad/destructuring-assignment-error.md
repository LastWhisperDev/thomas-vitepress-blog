---
outline: deep
---

# 解构赋值默认值问题
---

### 问题描述
> [!NOTE]
> 当我们在开发过程中，有时会对接口返回的result对象进行结构赋值，然后使用我们解构出来的值去做一些操作。我们习惯性的会按如下写法处理，但由于对解构赋值了解的不深入，往往埋下了坑。

### 原因讲解及解决方案
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

> [!TIP]
> 从上述代码我们可以看到，被编译后的代码在对默认初始值赋值时，判断的是`===void 0`。即只有对应的值强等于`undefined`时，才会进行默认值的赋值。因此，当某些特殊情况下后端接口返回值为null时，就会导致前端代码报错了。**这里我们可以使用如下写法兼容处理**
```js
// 原始业务代码
const result = null
const { thomas = 1 } = result || {}
```
