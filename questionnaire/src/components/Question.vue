<template>
    <li class="question" @mouseover="mousein = true" @mouseout="mousein = false">
        Q{{ quesIndex + 1 }}
        <input type="text" @blur="checkBlank" v-model="ques.title">
        <div v-if="ques.type == 0 || ques.type == 1" class="question-choice-group" v-for="(option, index) in ques.options" @mouseover="showDeleteOption[index] = true" @mouseout="showDeleteOption[index] = false">
            <input v-if="ques.type == 0" type="radio" :name="'question-' + (quesIndex + 1)">
            <input v-else type="checkbox" :name="'question-' + (quesIndex + 1)">
            <input type="text" @blur="checkBlank" v-model="option.text">
            <span class="delete-option" @click="deleteOption(index)" v-show="showDeleteOption[index]">X</span>
        </div>
        <div v-if="ques.type == 2">
            <label class="required-checkbox"><input type="checkbox" :name="'question-' + (quesIndex + 1)" v-model="ques.must">此题是否必填</label>
            <textarea>{{ ques.options[0].text }}</textarea>
        </div>
        <div class="question-actions" v-show="mousein">
            <span v-show="ques.type == 0 || ques.type == 1" class="add-option" @click="addOption">+</span>
            <span v-show="ques.type == 2" class="add-option hide-add-option"></span>
            <span>
                <span class="question-action" @click="up">上移</span>
                <span class="question-action" @click="down">下移</span>
                <span class="question-action" @click="copy">复用</span>
                <span class="question-action" @click="del">删除</span>
            </span>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'Question',
        data () {
            return {
                mousein: false,
                showDeleteOption: [],
                numArr: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
            }
        },
        props: [
            'quesList',
            'quesIndex',
            'ques'
        ],
        methods: {
            up () {
                if (this.quesIndex > 0) {
                    var temp = this.quesList.splice(this.quesIndex - 1, 1, this.quesList[this.quesIndex])[0]
                    this.quesList.splice(this.quesIndex, 1, temp)
                }
            },
            down () {
                console.log(this.quesIndex)
                if (this.quesIndex < this.quesList.length - 1) {
                    var temp = this.quesList.splice(this.quesIndex + 1, 1, this.quesList[this.quesIndex])[0]
                    this.quesList.splice(this.quesIndex, 1, temp)
                }
            },
            copy () {
                var options = this.quesList[this.quesIndex].options
                var newOptions = []
                var option
                for (var i = 0, len = options.length; i < len; i++) {
                    option = {}
                    option.text = options[i].text
                    option.num = 0
                    newOptions[i] = option
                }
                this.quesList.splice(this.quesIndex + 1, 0, {
                    title: this.quesList[this.quesIndex].title,
                    type: this.quesList[this.quesIndex].type,
                    must: this.quesList[this.quesIndex].must,
                    options: newOptions
                })
            },
            del () {
                this.quesList.splice(this.quesIndex, 1)
            },
            addOption () {
                var options = this.quesList[this.quesIndex].options
                if (options.length < 10) {
                    options.push(
                        {text: '选项' + this.numArr[options.length], num: 0}
                    )
                }
            },
            deleteOption (index) {
                var self = this
                this.quesList[this.quesIndex].options.splice(index, 1)
                this.quesList[this.quesIndex].options.forEach(function (op, index) {
                    if (op.text.indexOf('选项') !== -1) {
                        self.quesList[self.quesIndex].options[index].text = '选项' + self.numArr[index]
                    }
                })
            },
            checkBlank (event) {
                if (event.target.value.trim() === '') {
                    window.alert('不能为空')
                    event.target.focus()
                }
            }
        }
    }
</script>

<style>
    .questionnaire-add-question{
        border:1px solid #dddddd;
        margin-top:20px;
    }
    .question{
        width:100%;
        min-height:120px;
        padding:10px 20px 40px 20px;
        box-sizing: border-box;
        background:#fff;
        text-align: left;
    }
    .question:hover{
        background: rgb(254,241,232);
    }
    .question input[type="text"]{
        width:80%;
        height:1.5em;
        font-size: 16px;
        line-height: 1.5em;
        border:none;
        margin-left:20px;
        background:transparent;
    }
    .question label.required-checkbox{
        float:right;
    }
    .question textarea{
        width:70%;
        height:120px;
        margin:15px 0 0 40px;
        font-size: 16px;
    }
    .question .question-choice-group{
        width:100%;
        margin-top:5px;
        padding-left:40px;
        box-sizing: border-box;
    }
    .question span.delete-option{
        width:2em;
        height:2em;
        font-size: 18px;
        font-weight: bold;
        color:red;
        cursor: pointer;
    }
    .question-actions{
        float:right;
        width:55%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:10px 0 10px 0;
    }
    .question span.add-option{
        display: inline-block;
        width:20%;
        height:1em;
        font-size: 30px;
        line-height: 1em;
        text-align: center;
        border-radius: 3px;
        color:#fff;
        float:left;
        background:rgb(247, 120, 2);
        cursor: pointer;
    }
    .question span.hide-add-option{
        background: transparent;
    }
    .question-actions span.question-action{
        cursor: pointer;
        font-size: 16px;
    }
</style>
