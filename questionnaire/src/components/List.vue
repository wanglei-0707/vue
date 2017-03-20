<template>
    <div v-if="questionnaireList.length !== 0" class="list-wrapper">
        <table>
            <thead>
                <tr>
                    <th class="checkbox-td"></th>
                    <th class="td-title">标题</th>
                    <th class="td-time">时间</th>
                    <th class="td-status">状态</th>
                    <th class="td-operators">
                        操作
                        <router-link to="/new" class="new-questionnaire-btn link">+ 新建问卷</router-link>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in questionnaireList">
                    <td class="checkbox-td">
                        <input type="checkbox" :value="item.id" v-model="checkedList" @click="checkOne(item.id)" v-show="item.status === '未发布' ? true : false">
                    </td>
                    <td class="td-title">{{item.title}}</td>
                    <td class="td-time">{{item.time}}</td>
                    <td class="td-status" :class="{inpublish:item.status === '发布中', finished: item.status === '已结束'}">{{item.status}}</td>
                    <td class="td-operators">
                        <router-link :to="{name: 'edit', params: {id: item.id}}" class="operators-btn" v-show="item.status === '未发布'">编辑</router-link>
                        <a class="operators-btn" v-show="item.status === '未发布'" @click="deleteShowMask(item)">删除</a>
                        <router-link :to="{name: 'view', params: {id: item.id}}" class="operators-btn">查看问卷</router-link>
                        <router-link :to="{name: 'check', params: {id: item.id}}" class="operators-btn" v-show="item.status !== '未发布'">查看数据</router-link>
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
        <Pagination :indexCount="indexCount" @change-page="changePage"></Pagination>
        <MaskLayer v-if="maskShow" message="确定删除问卷？" @confirm-event="deleteQuestionnaire(delQuestionnaire)" @hide-event="maskShow = false"></MaskLayer>
    </div>
    <div v-else>
        <router-link to="/new" class="newnaire-btn">+ 新建问卷</router-link>
    </div>
</template>

<script>
    import MaskLayer from './Mask'
    import Pagination from './Pagination'

    export default {
        name: 'List',
        data () {
            return {
                maskShow: false,
                delQuestionnair: {},
                checkedList: [],
                checkboxAll: false,
                pageCount: 2,
                curPage: 0
            }
        },
        computed: {
            questionnaireList () {
                let start = this.curPage * this.pageCount
                let end = start + this.pageCount
                return this.$store.state.questionnaireList.slice(start, end)
            },
            unpublished () {
                var result = []
                for (var i in this.questionnaireList) {
                    if (this.questionnaireList[i].status === '未发布') {
                        result.push(this.questionnaireList[i].id)
                    }
                }
                return result
            },
            indexCount () {
                return Math.ceil(this.$store.state.questionnaireList.length / this.pageCount)
            }
        },
        components: {
            MaskLayer,
            Pagination
        },
        methods: {
            checkOne (id) {
                for (var i in this.checkedList) {
                    if (id === this.checkedList[i]) {
                        this.checkedList.splice(i, 1)
                        this.checkboxAll = false
                        return
                    }
                }
                this.checkedList.push(id)
                if (this.checkedList.length === this.unpublished.length) {
                    this.checkboxAll = true
                }
            },
            checkAll () {
                this.checkedList = []
                if (!this.checkboxAll) {
                    for (var i in this.unpublished) {
                        this.checkedList.push(this.unpublished[i])
                    }
                    this.checkboxAll = true
                } else {
                    this.checkboxAll = false
                }
            },
            deleteShowMask (item) {
                this.maskShow = true
                this.delQuestionnaire = item
            },
            deleteQuestionnaire (item) {
                console.log(item.id)
                this.$store.dispatch('delQuestionnaire', item.id)
                this.maskShow = false
            },
            hide () {
                this.maskShow = false
            },
            deleteChecked () {
                var self = this
                for (var i = this.checkedList.length; i >= 0; i--) {
                    self.$store.dispatch('delQuestionnaire', this.checkedList[i])
                    this.checkedList.splice(i, 1)
                    if (this.checkedList.length === 0) {
                        this.checkboxAll = false
                    }
                }
            },
            changePage (newPage) {
                this.curPage = newPage
            }
        }
    }
</script>

<style>
    .newnaire-btn{
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
    .list-wrapper, table,thead,tbody,tr{
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
    .td-title{
        width:30%;
    }
    .td-time{
        width:15%;
    }
    .td-status{
        width:15%;
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
    .new-questionnaire-btn{
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
    .operators-btn{
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
    tbody .link:hover, tbody .link:active{
        background:rgb(247, 120, 2);
        color:#fff;
    }
</style>
