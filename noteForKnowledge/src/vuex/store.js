import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  folders: [
    [3, '0', 'root', ''],
    [[3, '0.0', 'frontEnd', '/'], [1, '0.1', 'interview', '/'], [0, '0.2', 'python', '/']],
    [[0, '0.0.0', 'javascript', '/frontEnd/'], [0, '0.0.1', 'html', '/frontEnd/'], [2, '0.0.2', 'css', '/frontEnd'], [2, '0.1.0', 'css', '/interview/']],
    [[0, '0.0.2.0', 'css2', '/frontEnd/css/'], [0, '0.0.2.1', 'css3', '/frontEnd/css/'], [0, '0.1.0.0', 'css2', '/interview/'], [0, '0.1.0.1', 'css3', '/interview/']]
  ],
  notes: {
    '0.0.0': [
      {id: 0, title: '作用域和闭包', time: '2016-10-12', path: '/frontEnd/javascript', content: '闭包：是与作用域相关的概念，它指的是内部函数即使在外部函数执行完成并终止以后，仍然可以访问其外部函数的属性。'},
      {id: 1, title: '判断数组是数组', time: '2016-11-12', path: '/frontEnd/javascript', content: 'Object.prototype.toString.call(arr).slice(8,-1) === "Array"'},
      {id: 2, title: 'AJAX', time: '2017-02-28', path: '/frontEnd/javascript', content: '创建XMLHttpRequest, get请求, post请求'}
    ],
    '0.0.1': [
      {id: 3, title: 'web Storage', time: '2017-02-15', path: '/frontEnd/html', content: 'web Storage：1、将数据存储在JavaScript对象中，对象在页面加载时保存，并且容易获取。2、存储的数据不会在网络上传输，重新浏览网页时也容易获取到。'}
    ],
    '0.0.2.0': [
      {id: 4, title: '背景透明，文字不透明', time: '2017-01-24', path: '/frontEnd/css/css2', content: '使用rgba设置背景颜色'}
    ],
    '0.0.2.1': [
      {id: 5, title: 'flex布局模型', time: '2017-02-02', path: '/frontEnd/css/css3', content: 'dddddd'}
    ],
    '0.1.0.0': [
      {id: 6, title: '背景透明，文字不透明', time: '2017-01-24', path: '/interview/css/css2', content: '使用rgba设置背景颜色'}
    ],
    '0.1.0.1': [
      {id: 7, title: 'flex布局模型', time: '2017-02-02', path: '/interview/css/css3', content: ''}
    ],
    '0.2': [
      {id: 8, title: '语法1', time: '2017-02-20', path: '/python', content: '在编程中，变量只不过是用来指代某个东西的名字。程序员通过使用变量名可以让他们的程序读起来更像英语。而且因为程序员的记性都不怎么地，变量名可以让他们更容易记住程序的内容。如果他们没有在写程序时使用好的'},
      {id: 9, title: '语法1', time: '2017-02-20', path: '/python', content: '在编程中，变量只不过是用来指代某个东西的名字。程序员通过使用变量名可以让他们的程序读起来更像英语。'}
    ]
  }
}

export default new Vuex.Store({
  state
})
