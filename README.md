## Vue 练习项目合集

editor readme on github [editor on GitHub](https://github.com/wanglei-0707/vue/edit/master/README.md)

demo请见 [demo](https://wanglei-0707.github.io/vue/)

计划板 [time-tracker](https://wanglei-0707.github.io/vue/vue-time-tracker/dist)

问卷调查 [questionnaire](https://wanglei-0707.github.io/vue/questionnaire/dist)


## vue知识点

### 响应式原理
#### 如何追踪变化
把一个普通 Javascript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。
