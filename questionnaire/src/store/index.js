import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    user: {
        name: '维尼蕾',
        img: 'dist/images/1.jpg'
    },
    // 调查列表列表
    // type:0--单选题 1--多选题 2--文本题
    questionnaireList: [
        {
            id: '1',
            title: '这是我的第一份问卷',
            time: '2016-04-12 20:46:52',
            status: '未发布',
            questions: [
                {
                    'title': '你喜欢什么运动？',
                    'type': '1',
                    'must': true,
                    'options': [
                        {text: '足球', num: 8},
                        {text: '排球', num: 12},
                        {text: '篮球', num: 3},
                        {text: '羽毛球', num: 5}
                    ],
                    'picked': []
                },
                {
                    'title': '你喜欢排球吗？为什么？',
                    'type': '2',
                    'must': false,
                    'options': [
                        {text: '', num: 2}
                    ],
                    'picked': ''
                }
            ]
        },
        {
            id: '2',
            title: '这是我的第二份问卷',
            time: '2016-04-12 20:46:52',
            status: '发布中',
            questions: [
                {
                    'title': '你的性别？',
                    'type': '0',
                    'must': true,
                    'options': [
                        {text: '男', num: 23},
                        {text: '女', num: 12}
                    ],
                    'picked': ''
                },
                {
                    'title': '你的学历？',
                    'type': '0',
                    'must': true,
                    'options': [
                        {text: '高中', num: 5},
                        {text: '专科', num: 10},
                        {text: '本科', num: 7},
                        {text: '研究生', num: 7}
                    ],
                    'picked': ''
                },
                {
                    'title': '你喜欢以下什么游戏？',
                    'type': '1',
                    'must': true,
                    'options': [
                        {text: '谁说卧底', num: 4},
                        {text: '杀人游戏', num: 6},
                        {text: '狼人游戏', num: 3},
                        {text: '老鹰捉小鸡', num: 2},
                        {text: '丢手绢', num: 7},
                        {text: '其他', num: 2}
                    ],
                    'picked': []
                },
                {
                    'title': '你的梦想是什么？',
                    'type': '2',
                    'must': false,
                    'options': [
                        {text: '', num: 2}
                    ],
                    'picked': ''
                }
            ]
        },
        {
            id: '3',
            title: '这是我的第三份问卷',
            time: '2016-04-12 20:46:52',
            status: '已结束',
            questions: [
                {
                    'title': '你觉得宋茜长得怎么样？',
                    'type': '0',
                    'must': true,
                    'options': [
                        {text: '漂亮', num: 6},
                        {text: '很漂亮', num: 9},
                        {text: '太漂亮了', num: 14}
                    ],
                    'picked': ''
                },
                {
                    'title': '你觉得我是一个什么样的人？',
                    'type': '1',
                    'must': true,
                    'options': [
                        {text: '漂亮', num: 12},
                        {text: '可爱', num: 7},
                        {text: '聪明', num: 5},
                        {text: '努力', num: 8}
                    ],
                    'picked': []
                }
            ]
        }
    ],
    activeQuestionnaire: {}
}

export default new Vuex.store({
    state,
    mutations,
    actions
})