在一个页面上画一个按钮，有四种办法：

```
1、 <input type="button"> 这就是一个按钮。如果你不写javascript 的话，按下去什么也不会发生。

2、 <input type="submit">这样的按钮用户点击之后会自动提交 form，除非你写了javascript 阻止它。

3、<button> 这个按钮放在 form 中也会点击自动提交，比前两个的**优点**是按钮的内容不光可以有文字，还可以有图片等多媒体内容。（当然，前两个用图片背景也可以做到）。

它的缺点是不同的浏览器得到的 value 值不同；可能还有其他的浏览器兼容问题。

<button>无法把自己当成Form的数据，所以，如果只是个单纯的按钮，触发一些画面动作，请使用<button/>。反之，会把画面的数据提交给Server的，一般用<input type="submit" >，当然<button>+JS也完全可以取代

4、其他标签，例如 a, img, span, div，然后用图片把它伪装成一个按钮。

注意：在 HTML <form>中使用 button 元素，不同的浏览器会提交不同的值。Internet Explorer 将提交<button><button/>之间的文本，而其他浏览器将提交 value 属性的内容。请在 HTML 表单中使用<input>来创建按钮。
```

