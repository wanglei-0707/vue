<template>
    <table v-if="questionnaireList.length !== 0">
        <thead>
            <tr>
                <th class="checkbox-td"></th>
                <th>标题</th>
                <th>时间</th>
                <th>状态</th>
                <th>
                    操作
                    <router-link to="/">+ 新建问卷</a>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in questionnaireList">
                <td class="checkbox-td"><input type="checkbox" value="{{item.id}}" v-model="checkedList" @click="allChecked(item.id)" v-show="item.status === '未发布' ? true : false"></td>
                <td>{{item.title}}</td>
                <td>{{item.time}}</td>
                <td :class="{inpublish:item.status === '发布中', finished: item.status === '已结束'}">{{item.status}}</td>
                <td>
                    <a class="operators-btn" v-show="item.status === '未发布'" @click="editQuestionnaire(item)">编辑</a>
                    <a class="operators-btn" v-show="item.status === '未发布'" @click="deleteMethod(item)">删除</a>
                    <a class="operators-btn" v-show="item.status !== '未发布'" v-link="{name: 'checkData', params: {questionnaireId: parseInt(item.id)}}">查看数据</a>
                    <a class="operators-btn" v-link="{name: 'view', params: {questionnaireId: parseInt(item.id)}}">查看问卷</a>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="checkbox" @click="checkAll" v-model="checkboxAll">全选
                    <button class="deletechecked" @click="deleteChecked">删除</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-else>
        <router-link to="/" class="newnaire-btn">+ 新建问卷</router-link>
    </div>
</template>

<script>
    export default {
        name: 'List',
        computed: {
            questionnaireList () {
                return this.$store.state.questionnaireList
            }
        },
        methods: {
            allchecked () {
                return false;
            },
            editQuestionnaire () {
                return true;
            },
            deleteMethod () {
                return true;
            },
            checkAll () {
                return true;
            },
            deleteChecked () {
                return true;
            }
        }
    }
</script>

<style>
    a.newnaire-btn{
        display: block;
        width:9em;
        height:2em;
        line-height: 2em;
        font-size: 24px;
        background:rgb(247, 120, 2);
        color:#fff;
        border-radius: 3px;
        text-align: center;
        text-decoration: none;
        /*margin:100px auto;*/
    }
    table,thead,tbody,tr{
        width:100%;
    }
    th{
        text-align: left;
        height:40px;
        vertical-align: middle;
    }
    td{
        height:40px;
        vertical-align: middle;
        color:#000;
    }
    td.inpublish{
        color:#00ff00;
    }
    td.finished{
        color:red;
    }
    td input[type=checkbox]{
        margin:0 5px 0 20px;
    }
    .checkbox-td{
        width:70px;
    }
    tbody tr:not(:last-child){
        background: #fff;
        border-bottom: 2px solid rgb(239,239,239);
    }
    tbody tr:not(:last-child):hover{
    background: rgb(252,240,229);
    }
    tr button.deletechecked{
        margin-left:10px;
    }
    a.new-questionnaire-btn{
        width:100px;
        height:20px;
        line-height: 20px;
        font-size: 14px;
        background:rgb(247, 120, 2);
        color:#fff;
        border-radius: 3px;
        float:right;
        text-align: center;
        text-decoration: none;
        margin-right:30px;
    }
    tbody a.operators-btn{
        width:5em;
        height:20px;
        line-height: 20px;
        font-size: 14px;
        background: #fff;
        font-family: "微软雅黑";
        color:#000;
        border-radius: 3px;
        border:1px solid rgb(213, 214, 203);
        display: inline-block;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
    }
    tbody a:hover, tbody a:active{
        background:rgb(247, 120, 2);
        color:#fff;
    }
</style>
