# noteforknowledge

> imitate 为知笔记 app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目总结
1. html5中的classList属性：classList 属性返回元素的类名，作为 DOMTokenList 对象。该属性用于在元素中添加，移除及切换 CSS 类。classList 属性是只读的，但可以使用 add() 和 remove() 方法修改它。语法如下：
    1. length属性，返回类列表中类的数量。
    2. add(class1, class2, ...)方法，在元素中添加一个或多个类名。如果指定的类名已存在，则不会添加，返回值是undefined，因此无法级联。
    3. remove(class1, class2, ...)方法，移除元素中一个或多个类名。移除不存在的类名，不会报错。返回包装对象本身，因此可以级联。**经测试，貌似不能级联，返回undefined**
    4. contains(class)方法，返回布尔值，判断指定的类名是否存在。
    5. item(index)方法，返回索引值对应的类名，如果索引值在区间范围外则返回 null
    6. toggle(class, true|false)方法，在元素中切换类名。第一个参数为要在元素中移除的类名，并返回 false,如果该类名不存在则会在元素中添加类名，并返回 true。第二个是可选参数，如果为true，表示添加，如果为false，表示删除，返回该布尔值。
2. 隐藏滚动条：
    1. ::-webkit-scrollbar。仅在chrome下有用，但是当在chrome开发者工具下换成移动设备的时候还是有滚动条。
    ```
    ::-webkit-scrollbar{
        width:0;
    }
    ```
3. 导航栏在没有设置边框时总出现边框，并且随着屏幕宽高的变化，边框出现的情况也不一样，问题待解决！
4. 媒体查询@media
5. 点击添加按钮，出现添加菜单界面，动画为从下往上出现，并且有一个来回弹跳的过程。
    1. 使用css3的animation，可以设置弹跳的过程。但是弹跳效果不是很好，为知笔记是上方弹跳，下方不动，我的是下面也动了。。。。。**还需要改进**
6. css3的transform属性只能用在块级元素上，对span等内联元素无用，需转换为```display:block;```或者```display:inline-block```
7. 巧用apply实现在一个数组中追加一个数组：```Array.prototype.push.apply(arr1, arr2);```
