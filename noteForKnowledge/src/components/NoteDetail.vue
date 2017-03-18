<template>
    <div>
        <header class="note-detail-header">
            <i class="iconfont icon icon-jiantou-copy left-icon" @click="goback"></i>
            <h1 class="note-detail-header-title">为知笔记</h1>
            <i class="iconfont icon icon-share"></i>
        </header>
        <div class="note-detail-title">
            {{ note.title }}
        </div>
        <div class="note-detail-content">
            <p>{{ note.content}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
    note: function () {
      let noteid = +this.$route.params.id
      let notes = this.$store.state.notes
      for (let key in notes) {
        if (notes.hasOwnProperty(key)) {
          let noteArr = notes[key]
          for (let i = 0; i < noteArr.length; i++) {
            if (noteArr[i].id === noteid) {
              return noteArr[i]
            }
          }
        }
      }
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    goback: function () {
      this.$router.go(-1)
    }
  },
  components: {}
}
</script>

<style>
.note-detail-header{
    width:100%;
    /*height:60px;*/
    padding:20px 15px;
    box-sizing: border-box;
    background:#2277BF;
    color:#fff;
    position: fixed;
    z-index: 100;
}
.note-detail-header-title{
    display: inline-block;
    font-size: 1.4em;
}
.icon-share{
    float:right;
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
}
.note-detail-title{
    width:100%;
    padding:15px 20px;
    box-sizing: border-box;
    color:#000;
    background:#ccc;
    font-size: 1.2em;
    position: relative;
    top:63px;
}
.note-detail-content{
    padding:10px 20px;
    line-height: 1.5em;
    position: relative;
    top:63px;
}
</style>
