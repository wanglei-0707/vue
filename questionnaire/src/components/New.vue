<template>
    <div class="new-content">
        <div class="questionnaire-header">
            <input id="questionnaireTitle" @click="emptyInput" @blur="checkBlank" v-model="questionnaire.title">
        </div>
        <div class="questionnaire-body">
            <ul class="questionnaire-question">
                <Question v-for="(item, index) in quesList" :ques="item":quesIndex="index" :quesList="quesList"></Question>
            </ul>
            <div class="questionnaire-add-question">
                <div class="question-type">
                    <button class="type-btn" @click="addQuestion(0)">单选</button>
                    <button class="type-btn" @click="addQuestion(1)">多选</button>
                    <button class="type-btn" @click="addQuestion(2)">文本题</button>
                </div>
                <div class="add-btn" @click="showTypes">
                    + 添加问题
                </div>
            </div>
        </div>
        <div class="questionnaire-footer">
            <span>问卷截止日期:<input type="date" v-model="time"></span>
            <button class="questionnaire-btn" @click="saveQues">保存问卷</button>
            <button class="questionnaire-btn publish-btn" @click="maskShow = true">发布问卷</button>
        </div>
        <MaskLayer v-if="maskShow" message="是否发布问卷？" @confirm-event="publishQuestionnair" @hide-event="maskShow = false"></MaskLayer>
    </div>
</template>

<script>
    import Question from './Question'
    import MaskLayer from './Mask'
    export default {
        data () {
            var questionnaire
            if (this.$route.path === '/new') {
                // time = this.Format(new Date(), 'yyyy-MM-DD hh:mm:ss')
                questionnaire = {
                    id: this.$store.state.questionnaireList.length + 1,
                    title: '这里是标题',
                    status: '未发布',
                    time: '',
                    questions: []
                }
            } else {
                questionnaire = this.$store.state.questionnaireList[this.$route.params.id - 1]
            }
            return {
                questionnaire: questionnaire,
                quesList: questionnaire.questions,
                maskShow: false,
                time: ''
            }
        },
        components: {
            Question,
            MaskLayer
        },
        watch: {
            time () {
                var now = new Date().getTime()
                var time = Date.parse(this.time)
                if (time < now) {
                    window.alert('截止日期不能早于当前日期')
                    this.time = ''
                }
            }
        },
        methods: {
            Format (date, fmt) {
                console.log(date)
                var o = {
                    'M+': date.getMonth() + 1,                 // 月份
                    'D+': date.getDate(),                    // 日
                    'h+': date.getHours(),                   // 小时
                    'm+': date.getMinutes(),                 // 分
                    's+': date.getSeconds(),                 // 秒
                    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
                    'S': date.getMilliseconds()             // 毫秒
                }
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
                }
                for (var k in o) {
                    if (new RegExp('(' + k + ')').test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
                    }
                }
                return fmt
            },
            emptyInput (event) {
                event.target.value = ''
            },
            checkBlank (event) {
                if (event.target.value.trim() === '') {
                    window.alert('标题不能为空')
                    event.target.focus()
                }
            },
            showTypes () {
                document.getElementsByClassName('question-type')[0].style.display = 'flex'
            },
            addQuestion (type) {
                if (type === 0) {
                    this.quesList.push({
                        title: '单选题',
                        type: type,
                        must: true,
                        options: [
                            {text: '选项一', num: 0},
                            {text: '选项二', num: 0}
                        ],
                        picked: ''
                    })
                } else if (type === 1) {
                    this.quesList.push({
                        title: '多选题',
                        type: type,
                        must: true,
                        options: [
                            {text: '选项一', num: 0},
                            {text: '选项二', num: 0},
                            {text: '选项三', num: 0},
                            {text: '选项四', num: 0}
                        ],
                        picked: []
                    })
                } else if (type === 2) {
                    this.quesList.push({
                        title: '文本题',
                        type: type,
                        must: false,
                        options: [
                            {text: '在这里写答案', num: 0}
                        ],
                        picked: ''
                    })
                }
            },
            saveQues () {
                if (this.quesList.length < 1) {
                    window.alert('问卷不能为空，至少含有一个问题！')
                    return
                } else if (!this.time) {
                    window.alert('请选择日期')
                    return
                }
                // this.questionnaire.time = this.Format(this.time, 'yyyy-MM-DD')
                this.questionnaire.time = this.time
                if (this.$route.path === '/new') {
                    this.$store.dispatch('addQuestionnaire', this.questionnaire)
                    window.alert('问卷添加成功！')
                } else {
                    this.$store.dispatch('saveQuestionnaire', this.questionnaire)
                    window.alert('问卷保存成功！')
                }
            },
            publishQuestionnair () {
                if (this.quesList.length < 1) {
                    window.alert('问卷不能为空，至少含有一个问题！')
                    return
                }
                if (!this.time) {
                    window.alert('请选择日期')
                }
                // this.questionnaire.time = this.Format(this.time, 'yyyy-MM-DD hh-mm-ss')
                this.questionnaire.time = this.time
                for (var i in this.$store.state.questionnaireList) {
                    if (this.$store.state.questionnaireList[i].id === this.questionnaire.id) {
                        this.questionnaire.status = '发布中'
                        this.$store.dispatch('saveQuestionnaire', this.questionnaire)
                        return
                    }
                }
                this.questionnaire.status = '发布中'
                this.$store.dispatch('addQuestionnaire', this.questionnaire)
                this.$router.push('/list')
            }
        }
    }
</script>

<style>
    .new-content{
        width:100%;
    }
    .questionnaire-header, .questionnaire-body, .questionnaire-footer{
        width:100%;
        text-align: center;
        background:#fff;
        padding:20px;
        box-sizing:border-box;
    }
    .questionnaire-header input{
        width:100%;
        height:3em;
        line-height: 3em;
        font-size: 20px;
        font-weight: bold;
        border:none;
        text-align: center;
    }
    .questionnaire-header input:hover{
        background:rgb(254,241,232);
    }
    .questionnaire-body{
        border-top:1px solid #c0c0c0;
        border-bottom: 1px solid #c0c0c0;
        box-sizing: border-box;
    }
    .questionnaire-body .questionnaire-add-question{
        border:1px solid #dddddd;
        margin-top:20px;
    }
    .questionnaire-body .add-btn{
        height:60px;
        background:rgb(239,239,239);
        font-size: 14px;
        line-height: 60px;
        cursor: pointer;
    }
    .question-type{
        width:100%;
        height:60px;
        background:#fff;
        display: flex;
        justify-content:center;
        align-items: center;
        transition: height 3s;
        -moz-transition:height 3s;
        -webkit-transition: height 3s;
        -ms-transition: height 3s;
        -o-transition: height 3s;
        display: none;
    }
    .question-type .type-btn, .questionnaire-footer .questionnaire-btn{
        width:80px;
        height:30px;
        background:rgb(239,239,239);
        color:#000;
        font-size: 12px;
        margin:0 20px;
        cursor: pointer;
        border-radius: 3px;
        border:1px solid #c0c0c0;
    }
    .questionnaire-footer .publish-btn{
        color:#fff;
        background: rgb(247, 120, 2)
    }
    .question-type .type-btn:hover{
        color:#fff;
        background:rgb(247,120,2);
    }
</style>
