---
outline: deep
---

# 常用代码片段

这里会积累一些工作中常用到的代码片段，方便以后开发过程中查找复用。

### 文件下载

::: details 点我查看代码
::: code-group
```js [创建a标签]
async download() {
  axios.post(
    'download/url',
    '',
    {responseType: 'blob' }
  )
    .then(res => {
      // 处理文档流
      const blob = new Blob([res.data]);
      // 设置文件名
      const fileName = 'thomas.xlsx';
      // 创建a标签
      const downLoadlink = document.createElement('a');
      downLoadlink.download = fileName;
      downLoadlink.style.display = 'none';
      downLoadlink.href = URL.createObjectURL(blob);
      // append到页面中
      document.body.appendChild(downLoadlink);
      // 点击a链接
      downLoadlink.click();
      URL.revokeObjectURL(downLoadlink.href);
      // 移除创建节点
      document.body.removeChild(downLoadlink);
    })
}
```

```js [Blob对象-模拟点击]
async downloadFile() {
  try {
    // 发送GET请求下载文件
    const response = await fetch('download/url');
    const blob = await response.blob();

    // 创建一个临时的URL对象
    const url = window.URL.createObjectURL(blob);

    // 创建一个a链接，并设置其href，以便下载文件
    const downLoadlink = document.createElement('a');
    downLoadlink.href = url;
    downLoadlink.download = 'thomas.xlsx';

    // 模拟点击下载链接
    link.click();

    // 清理临时URL对象
    window.URL.revokeObjectURL(url);
      
  } catch (error) {
    console.error(error);
  }
}
```

```js [form表单]
downloadFile() {
  // 创建一个form元素
  const form = document.createElement('form')
  form.method = 'GET'
  form.action = 'download/url'
  
  // 如果有参数，则通过input携带（如果是post请求，可直接拼接在action后）
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'file';
  input.value = 'fileId';
  form.appendChild(input);

  // 将form元素添加到页面中
  document.body.appendChild(form);

  // 提交表单进行文件下载
  form.submit();

  // 移除动态创建的form元素
  document.body.removeChild(form);
}
```
:::

### 滚动溢出
对于一些 Mac 系统电脑，触控板左右滚动会导致页面前进后退（同理也有滚动区域套滚动区域，内部滚动区域会影响到外部滚动区域）

::: details 点我查看代码
::: code-group
```css [web方案]
/* 设置容器 contain || none */
.container {
  overscroll-behavior-x: contain;
}
```
:::

### Vue2 provide/inject 响应式
默认情况下，如果父组件直接注入数据不做任何处理，当改变父组件的数据时，子组件的数据不会同时发生改变。

::: details 点我查看代码
::: code-group
```js [函数式]
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
