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
      let notepath = this.$route.params.notepath
      let pathArr = notepath.split('-').slice(0, -1)
    //   let noteid = +notepath.split('-').slice(-1)[0]
      let noteList = this.$store.state.noteList
      console.log(pathArr)
      for (let i = 0; i < noteList.length; i++) {
        if (noteList[i].name === pathArr[0]) {
          console.log('111:' + noteList[i].name)
          if (pathArr[1]) {
            noteList = noteList[i].childFolder
            for (let j = 0; j < noteList.length; j++) {
              if (noteList[j].name === pathArr[1]) {
                console.log('2222:' + noteList[i].name)
                if (pathArr[2]) {
                  noteList = noteList[j].childFolder
                  for (let k = 0; k < noteList.length; k++) {
                    if (noteList[k].name === pathArr[2]) {
                      noteList = noteList[k].notes
                      break
                    }
                  }
                } else {
                  noteList = noteList[j].notes
                }
              }
            }
          } else {
            noteList = noteList[i].notes
          }
        }
      }
      console.log(noteList)
      console.log(notepath)
    //   for (let i = 0; i < noteList.length; i++) {
    //     if (noteList[i].id === noteid) {
    //       return noteList[i]
    //     }
    //   }
    //   return noteList
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
    height:70px;
    padding:20px;
    box-sizing: border-box;
    background:#2277BF;
    color:#fff;
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
    height:60px;
    line-height: 60px;
    padding-left:20px;
    box-sizing: border-box;
    color:#000;
    background:#ccc;
    font-size: 1.4em;
}
.note-detail-content{
    padding:10px 20px;
    line-height: 1.5em;
}
</style>
