# 在js文件中引入（调用）另一个js文件的三种方法



## 方法一，在调用文件的顶部加入下例代码

```
function addScript(url){
    document.write("<script language=javascript src="+url+"></script>");
}
```

> 注：有时你引用的文件还可能需要引用其他的js,我们需要将需要的那个js文件也以同样的方法引用进来。

## 方法二，在js中写如下代码：

```
function addScript(url){
	var script = document.createElement('script');
	script.setAttribute('type','text/javascript');
	script.setAttribute('src',url);
	document.getElementsByTagName('head')[0].appendChild(script);
}
```

利用document.createElement(”script”)生成了一个script的标签，设置其 type属性为text/javascript。

## 方法三，利用es6中export和import实现模块化

一个js文件代表一个js模块 。ES6引入外部模块分两种情况：

##### 1.导入外部的变量或函数等；

```
import {firstName, lastName} from './test';
```

##### 2.导入外部的模块，并立即执行

```
import './test'
//执行test.js，但不导入任何变量
```