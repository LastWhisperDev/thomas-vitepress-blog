---
outline: deep
---

# 滚动溢出
对于一些 Mac 系统电脑，触控板左右滚动会导致页面前进后退（同理也有滚动区域套滚动区域，内部滚动区域会影响到外部滚动区域）

### 示例代码
```css
/* 设置容器 contain || none */
.container {
  overscroll-behavior-x: contain;
}
```
