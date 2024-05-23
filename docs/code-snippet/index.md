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

### 文案内容过长后中间展示省略号
css实现当文本内容过长时，中间显示省略号...，两端正常展示。

::: details 点我查看代码
::: code-group
```html [Html]
<div class="con">
  <div class="wrap">
    <span class="txt">
      CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26
    </span>
    <span class="title" title="CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26">
      CSS测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26
    </span>
  </div>
</div>
```

```css [Css]
.con {
  font-size: 14px;
  width: 600px;
}

.wrap {
  position: relative;
  line-height: 2;
  height: 2em;
  padding: 0 10px;
  overflow: hidden;
  background: #fff;
}

.title {
  display: block;
  position: relative;
  background: inherit;
  text-align: justify;
  height: 2em;
  overflow: hidden;
  top: -4em;
}

.txt {
  display: block;
  max-height: 4em;
}
.title::before{
  content: attr(title);
  width: 50%;
  float: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;
}
```
:::
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/web-wangle/embed/wvbKQMZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/web-wangle/pen/wvbKQMZ">
  Untitled</a> by web-wangle (<a href="https://codepen.io/web-wangle">@web-wangle</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### div实现内凹效果
使用css中的background实现div内凹效果，常用于一些优惠券场景

::: details 点我查看代码
::: code-group
```html [Html]
<div class="thomas">
  <div class="cover"></div>
</div>
```

```css [Css]
.thomas {
  width: 200px;
  height: 200px;
  background: blue;
}
.cover {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle at 40px 40px,transparent 0, transparent 20px,red 21px, red 40px);
  background-position: -40px -40px;
}

/*
radial-gradient：表示创建一个径向渐变效果。
circle：表示渐变的形状为圆形。
at 40px 40px：表示渐变的中心点在距离左上角40像素的位置。
transparent 0：表示从中心点开始，颜色透明度为0。
transparent 20px：表示从中心点开始，颜色透明度在距离中心点20像素的位置为0。
red 21px：表示从中心点开始，颜色为红色，距离中心点21像素的位置。
red 40px：表示从中心点开始，颜色为红色，距离中心点40像素的位置。
background-position：表示背景图像的起始位置。
-40px -40px：表示背景图像的起始位置在距离左上角40像素的位置，即向左上方偏移40像素。
*/
```
:::
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/web-wangle/embed/LYoZQNv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/web-wangle/pen/LYoZQNv">
  Untitled</a> by web-wangle (<a href="https://codepen.io/web-wangle">@web-wangle</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>