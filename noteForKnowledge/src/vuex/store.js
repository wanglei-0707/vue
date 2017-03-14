import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 笔记
  noteList: [
    {
      name: 'frontEnd',
      childFolder: [
        {
          name: 'javascript',
          notes: [
            {
              id: 0,
              title: '作用域和闭包',
              time: '2016-10-12',
              content: '闭包：是与作用域相关的概念，它指的是内部函数即使在外部函数执行完成并终止以后，仍然可以访问其外部函数的属性。'
            },
            {
              id: 1,
              title: '判断数组是数组',
              time: '2016-11-12',
              content: 'Object.prototype.toString.call(arr).slice(8,-1) === "Array"'
            },
            {
              id: 2,
              title: 'AJAX',
              time: '2017-02-28',
              content: '创建XMLHttpRequest, get请求, post请求'
            }
          ]
        },
        {
          name: 'html',
          notes: [
            {
              id: 3,
              title: 'web Storage',
              time: '2017-02-15',
              content: 'web Storage：1、将数据存储在JavaScript对象中，对象在页面加载时保存，并且容易获取。2、存储的数据不会在网络上传输，重新浏览网页时也容易获取到。'
            }
          ]
        },
        {
          name: 'css',
          childFolder: [
            {
              name: 'css2',
              notes: [
                {
                  id: 4,
                  title: '背景透明，文字不透明',
                  time: '2017-01-24',
                  content: '使用rgba设置背景颜色'
                }
              ]
            },
            {
              name: 'css3',
              notes: [
                {
                  id: 5,
                  title: 'flex布局模型',
                  time: '2017-02-02',
                  content: ''
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'interview',
      childFolder: [
        {
          name: 'css',
          childFolder: [
            {
              name: 'css2',
              notes: [
                {
                  id: 6,
                  title: '背景透明，文字不透明',
                  time: '2017-01-24',
                  content: '使用rgba设置背景颜色'
                }
              ]
            },
            {
              name: 'css3',
              notes: [
                {
                  id: 7,
                  title: 'flex布局模型',
                  time: '2017-02-02',
                  content: ''
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'pathon',
      notes: [
        {
          id: 8,
          title: '语法1',
          time: '2017-02-20',
          content: '在编程中，变量只不过是用来指代某个东西的名字。程序员通过使用变量名可以让他们的程序读起来更像英语。而且因为程序员的记性都不怎么地，变量名可以让他们更容易记住程序的内容。如果他们没有在写程序时使用好的变量名，在下一次读到原来写的代码时他们会大为头疼的。'
        },
        {
          id: 8,
          title: '语法2',
          time: '2017-02-21',
          content: '在编程中，变量只不过是用来指代某个东西的名字。程序员通过使用变量名可以让他们的程序读起来更像英语。而且因为程序员的记性都不怎么地，变量名可以让他们更容易记住程序的内容。如果他们没有在写程序时使用好的变量名，在下一次读到原来写的代码时他们会大为头疼的。'
        }
      ]
    }
  ]
  // noteList: {
  //   frontEnd: {
  //     javascript: {
  //       notes: {
  //         '0': {
  //           title: '作用域和闭包',
  //           time: '2016-10-12',
  //           content: '闭包：是与作用域相关的概念，它指的是内部函数即使在外部函数执行完成并终止以后，仍然可以访问其外部函数的属性。'
  //         },
  //         '1': {
  //           title: '判断数组是数组',
  //           time: '2016-11-12',
  //           content: 'Object.prototype.toString.call(arr).slice(8,-1) === "Array"'
  //         },
  //         '2': {
  //           title: 'AJAX',
  //           time: '2017-02-28',
  //           content: '创建XMLHttpRequest, get请求, post请求'
  //         }
  //       }
  //     },
  //     html: {
  //       notes: {
  //         '3': {
  //           title: 'web Storage',
  //           time: '2017-02-15',
  //           content: 'web Storage：1、将数据存储在JavaScript对象中，对象在页面加载时保存，并且容易获取。2、存储的数据不会在网络上传输，重新浏览网页时也容易获取到。'
  //         }
  //       }
  //     },
  //     css: {
  //       css2: {
  //         notes: {
  //           '4': {
  //             title: 'flex布局模型',
  //             time: '2017-02-02',
  //             content: ''
  //           }
  //         }
  //       },
  //       css3: {
  //         notes: {
  //           '5': {
  //             title: 'flex布局模型',
  //             time: '2017-02-02',
  //             content: ''
  //           }
  //         }
  //       }
  //     }
  //   },
  //   interview: {
  //     css2: {
  //       notes: {
  //         '6': {
  //           title: 'flex布局模型',
  //           time: '2017-02-02',
  //           content: ''
  //         }
  //       }
  //     },
  //     css3: {
  //       notes: {
  //         '7': {
  //           title: 'flex布局模型',
  //           time: '2017-02-02',
  //           content: ''
  //         }
  //       }
  //     }
  //   },
  //   python: {
  //     notes: {
  //       '8': {
  //         title: '语法1',
  //         time: '201702-20',
  //         content: '在编程中，变量只不过是用来指代某个东西的名字。程序员通过使用变量名可以让他们的程序读起来更像英语。而且因为程序员的记性都不怎么地，变量名可以让他们更容易记住程序的内容。如果他们没有在写程序时使用好的变量名，在下一次读到原来写的代码时他们会大为头疼的。'
  //       },
  //       '9': {
  //         title: '语法1',
  //         time: '201702-20',
  //         content: '在编程中，变量只不过是用来指代某个东西的名字。程序员通过使用变量名可以让他们的程序读起来更像英语。而且因为程序员的记性都不怎么地，变量名可以让他们更容易记住程序的内容。如果他们没有在写程序时使用好的变量名，在下一次读到原来写的代码时他们会大为头疼的。'
  //       }
  //     }
  //   }
  // }
}

export default new Vuex.Store({
  state
})
