<template>
  <div class="note-header">
    <span class="note-header-menu">
        <i class="icon iconfont icon-caidan left-icon"></i>
    </span>
    <h1 class="note-header-title">个人笔记</h1>
    <div class="note-header-icons">
        <i class="note-header-flush icon iconfont icon-shuaxin"></i>
        <i class="note-header-search icon iconfont icon-sousuo"></i>
        <i class="note-header-mark icon iconfont icon-wenjianjia"></i>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style>
.note-header{
    width:100%;
    height:70px;
    padding:20px;
    box-sizing: border-box;
    background:#2277BF;
    color:#fff;
}
.icon{
    font-size: 1.5rem;
}
.left-icon{
    margin-right:1rem;
}
.note-header-title{
    font-size: 1.6rem;
    font-weight: 700px;
    display: inline-block;
    margin:0;
}
.note-header-icons{
    height:30px;
    line-height: 30px;
    float:right;
}
.note-header-icons .iconfont:not(:last-child){
    margin-right:.8rem;
}

</style>
