<template>
    <div class="new-content">
        <div class="questionnaire-header">
            <h1 class="questionnaire-title">{{questionnaire.title}}</h1>
        </div>
        <div class="questionnaire-body">
            <ul>
                <li class="question-box" v-for="(item, index) in quesList"  @mouseover="mousein = true" @mouseout="mousein = false">
                    <div :id="'echarts-' + index" class="question-echarts" v-if="!isView && (item.type == 0 || item.type == 1)"></div>
                    <p>
                        Q{{ index + 1 }}&nbsp;&nbsp;{{item.title}}
                        <span class="required-icon" v-show="item.must">*</span>
                    </p>
                    <div v-if="item.type == 0 || item.type == 1" class="question-choice-group" v-for="option in item.options">
                        <input v-if="isView && item.type == 0" type="radio" :name="'question-' + (index + 1)" :value="option.text" v-model="item.picked">
                        <input v-else-if="isView && item.type == 1" type="checkbox" :name="'question-' + (index + 1)" :value="option.text" v-model="item.picked">
                        {{option.text}}
                    </div>
                    <textarea v-if="item.type == 2" v-model="item.picked"></textarea>
                </li>
            </ul>
        </div>
        <div class="questionnaire-footer">
            <button v-if="isView" class="ques-btn" @click="submitQuestionnaire">提交问卷</button>
            <router-link to="/list" v-else class="ques-btn">返回</router-link>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: 'Check',
        data () {
            var isView, questionnaire, quesList
            isView = false
            questionnaire = this.$store.state.questionnaireList[this.$route.params.id - 1]
            quesList = questionnaire.questions
            if (this.$route.name === 'view') {
                isView = true
            }
            return {
                mouse: false,
                isView: isView,
                questionnaire: questionnaire,
                quesList: quesList
            }
        },
        mounted () {
            if (!this.isView) {
                this.getData()
            }
        },
        methods: {
            getData () {
                var myChart
                for (var i = 0, len = this.quesList.length; i < len; i++) {
                    if (this.quesList[i].type === '0') {
                        var optionText = []
                        var optionNum = []
                        var sum = 0
                        myChart = echarts.init(document.getElementById('echarts-' + i))
                        for (var j in this.quesList[i].options) {
                            optionText.push(this.quesList[i].options[j].text)
                            sum += this.quesList[i].options[j].num
                            optionNum.push(this.quesList[i].options[j].num)
                        }
                        for (var t in optionNum) {
                            // optionNum[t] = (optionNum[t] / sum * 100).toFixed(0)
                            optionNum[t] = Math.round((optionNum[t] / sum) * 100)
                        }
                        myChart.setOption({
                            title: {
                                text: '数据占比（%）',
                                x: 'left'
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'value'
                            },
                            yAxis: {
                                type: 'category',
                                data: optionText
                            },
                            series: [
                                {
                                    type: 'bar',
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'insideRight'
                                        }
                                    },
                                    data: optionNum,
                                    itemStyle: {
                                        normal: {
                                            color: 'rgb(247, 120, 2)'
                                        }
                                    }
                                }
                            ]
                        })
                    } else if (this.quesList[i].type === '1') {
                        var data = []
                        myChart = echarts.init(document.getElementById('echarts-' + i))
                        for (var k in this.quesList[i].options) {
                            data.push({value: this.quesList[i].options[k].num, name: this.quesList[i].options[k].text})
                        }
                        myChart.setOption({
                            title: {
                                text: '数据占比',
                                x: 'left'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b} : {c} ({d}%)'
                            },
                            series: [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: '55%',
                                    center: ['50%', '60%'],
                                    data: data,
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        })
                    }
                }
            },
            submitQuestionnaire () {
                if (this.questionnaire.status !== '发布中') {
                    window.alert('问卷未发布或者已结束，提交无效！')
                    return
                }
                for (var i = 0, len = this.quesList.length; i < len; i++) {
                    var ques = this.quesList[i]
                    if (ques.must && (ques.picked === '' || ques.picked === [])) {
                        console.log(i)
                        console.log(ques.must)
                        console.log(ques.picked)
                        window.alert('带*号的为必填项')
                        return
                    }
                    if (ques.type === '0') {
                        ques.options.forEach(op => {
                            if (op.text === ques.picked) {
                                op.num++
                            }
                        })
                        ques.picked = ''
                    } else if (ques.type === '1') {
                        ques.options.forEach(op => {
                            for (var i in ques.picked) {
                                if (op.text === ques.picked[i]) {
                                    op.num++
                                }
                            }
                        })
                        ques.picked = []
                    } else {
                        if (ques.picked !== '') {
                            ques.options[0].num++
                        }
                        ques.picked = ''
                    }
                }
                this.$store.dispatch('saveQuestionnaire', this.questionnaire)
                window.alert('问卷提交成功，谢谢参与！')
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
    }
    .questionnaire-body{
        border-top:1px solid #c0c0c0;
        border-bottom: 1px solid #c0c0c0;
        box-sizing: border-box;
    }
    .questionnaire-title{
        font-size: 20px;
    }
    .question-box{
        width:100%;
        min-height:150px;
        padding:10px;
        /*box-sizing: border-box;*/
        background:#fff;
        text-align: left;
        border:1px solid #c0c0c0;
        margin-bottom:20px;
    }
    .question-box:hover{
        background: rgb(254,241,232);
    }
    .question-box .question-choice-group{
        width:100%;
        margin-top:15px;
        padding-left:40px;
        box-sizing: border-box;
    }
    .question-box .question-choice-group input{
        margin-right:20px;
    }
    .question-box .required-icon{
        color:red;
        margin-left:10px;
    }
    .questionnaire-footer .ques-btn{
        padding:3px 10px;
        font-size: 16px;
        background: #fff;
        font-family: "微软雅黑";
        color:#fff;
        border-radius: 3px;
        border:1px solid rgb(213, 214, 203);
        background:rgb(247, 120, 2);
    }
    .question-echarts{
        width: 400px;
        height:150px;
        float:right;
    }
    .question-box textarea{
        width:50%;
        height:120px;
        margin:15px 0 0 40px;
        font-size: 16px;
    }
</style>
