---
outline: deep
---

# flex布局文本溢出省略号问题
---

### 问题描述
> [!NOTE]
> 在需求开发中，如果父元素为flex布局，子元素如果想要实现文本溢出省略号功能，会发现文本只是被截断了，并没有出现省略号。

### 效果展示
<br>
<iframe height="300" style="width: 100%;" scrolling="no" title="flex布局文本溢出失效" src="https://codepen.io/web-wangle/embed/xxogBZG?default-tab=css%2Cresult&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/web-wangle/pen/xxogBZG">
  flex布局文本溢出失效</a> by web-wangle (<a href="https://codepen.io/web-wangle">@web-wangle</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 原因讲解及解决方案
> [!TIP]
> 出现这种问题的根本原因是flex item的最小尺寸问题导致  

**知识点1：**  
对于flex item，通常涉及到两个属性：`min-width`和`min-height`。这两个属性可以用来设置flex项的最小宽度和最小高度。在Flexbox中，flex项默认会根据内容的大小来决定其尺寸。即flex item的`min-width`和`min-height`默认为`auto`。  
所以flex item在主轴方向上不会比他的内容尺寸还小，这是因为浏览器是根据内容的宽度来计算默认的`min-width`或者`min-height`的。  

**知识点2：**  
如果flex item的`overflow`属性在主轴上是`visible`，那么它的min-size属性将被设置为自动最小尺寸，否则将会计算为0

### 解决方案
::: code-group

```css [min-width]
/* 基于知识点1，对于需要处理的flexItem，直接设置min-width=0 */
.flex-item {
  min-width: 0;
}
```

```css [overflow]
/* 基于知识点2，对于需要处理的flexItem，直接设置overflow为非visible，此时min-width将会被默认为0 */
.flex-item {
  overflow: hidden;
}
```

```css [-webkit-box]
/* 对于需要隐藏的元素，直接使用-webkit-box */
.title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
```
:::
