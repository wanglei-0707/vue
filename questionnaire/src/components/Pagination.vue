<template lang="html">
    <div class="">
        <ul class="page-wrapper">
            <li class="page-item">
                <a href="#" :class="{'active': cur === 1}" @click="changePage('minus')">上一页</a>
            </li>
            <li class="page-item" v-if="cur>3">
                <a href="#" :class="{'active': cur === index}" @click="changePage(1)">1</a>
            </li>
            <li class="page-item" v-if="cur>3"><a href="">...</a></li>
            <li v-for="index in indexs" class="page-item">
                <a href="#" :class="{'active': cur === index}" @click="changePage(index)">{{ index }}</a>
            </li>
            <li class="page-item" v-if="cur<(indexCount-1)"><a href="#">...</a></li>
            <li class="page-item" v-if="cur<(indexCount-1)">
                <a href="#" :class="{'active': cur === index}" @click="changePage(indexCount)">{{ indexCount }}</a>
            </li>
            <li class="page-item">
                <a href="#" :class="{'active': cur === indexCount}" @click="changePage('plus')" >下一页</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            prev: false,
            next: true,
            cur: 1
        }
    },
    props: ['indexCount'],
    computed: {
        indexs: function () {
            let indexarr = []
            let first = 1
            let last
            let total = this.indexCount
            let cur = this.cur
            if (total > 5) {
                if (cur > 3 && cur < (total - 2)) {
                    first = cur - 2
                    last = cur - 2
                } else if (cur > 3) {
                    first = total - 4
                    last = total
                } else {
                    first = 1
                    last = 5
                }
            } else {
                first = 1
                last = total
            }
            for (let i = first, j = 0; i <= last; i++, j++) {
                indexarr[j] = i
            }
            return indexarr
        }
    },
    ready: function () {},
    attached: function () {},
    methods: {
        changePage (index) {
            if (index === 'minus') {
                this.cur = this.cur > 1 ? this.cur - 1 : 1
            } else if (index === 'plus') {
                this.cur = this.cur < this.indexCount ? this.cur + 1 : this.indexCount
            } else {
                this.cur = index
            }
            this.$emit('change-page', this.cur - 1)
        }
    },
    components: {}
}
</script>

<style lang="css">
    .page-wrapper{
        text-align: center;
        font-size: 0;
    }
    .page-item{
        list-style: none;
        display: inline-block;
        font-size: 16px;
        border: 1px solid #6E9DE4;
        margin-right:5px;
    }
    .page-item a{
        display: block;
        padding:5px 10px;
        text-decoration: none;
        cursor: pointer;
        background:#F5F5F5;
        color: #6E9DE4;
    }
    .page-item a:hover{
        background:#E0E0E0;
        color: #1928DE;
    }
    .page-item .active{
        color: #000;
        cursor: not-allowed;
    }
</style>
