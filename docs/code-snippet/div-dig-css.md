---
outline: deep
---

# div实现内凹效果
使用css中的background实现div内凹效果，常用于一些优惠券场景

### 效果展示
<br>
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/web-wangle/embed/LYoZQNv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/web-wangle/pen/LYoZQNv">
  Untitled</a> by web-wangle (<a href="https://codepen.io/web-wangle">@web-wangle</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 示例代码
```html
<div class="thomas">
  <div class="cover"></div>
</div>
```

```css
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
