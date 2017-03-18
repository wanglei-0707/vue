<template>
    <div>
        <header v-if="folder" class="note-detail-header">
            <i class="iconfont icon icon-jiantou-copy left-icon" @click="goback"></i>
            <h1 class="note-detail-header-title">文件夹：{{ folder[2] }}</h1>
            <div class="note-header-icons">
                <i class="iconfont icon icon-sousuo"></i>
                <i class="iconfont icon icon-share"></i>
            <div>
        </header>
        <div v-if="folder" class="fillfixed"></div>
        <div class="note-detail-remind">
            今日提醒0
        </div>
        <div class="note-notelist-content">
            <div v-for="notesSameMonth in notes">
                <div class="note-notelist-time">
                    {{ notesSameMonth.time }}
                </div>
                <div v-for="note in notesSameMonth.notes" class="note-notelist-note" @click="openNote(note)">
                    <h1 class="note-notelist-note-title">{{ note.title }}</h1>
                    <time class="note-notelist-note-time">{{ note.time }}</time>
                    <span class="note-notelist-note-path">{{ note.path }}</span>
                    <div class="note-notelist-note-content">
                        {{ note.content }}
                    </div>
                </div>
            </div>
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
    folder: function () {
      if (this.$route.name === 'recently') {
        return false
      }
      let params = this.$route.params.foldername
      let index1 = +params.split('-')[1]
      let index2 = +params.split('-')[2]
      return this.$store.state.folders[index1][index2]
    },
    notes: function () {
      var folders = this.$store.state.folders
      var notes = this.$store.state.notes
      var noteArr = []
      var ret = {}
      if (this.$route.name === 'recently') {
        for (let key in notes) {
          if (notes.hasOwnProperty(key)) {
            noteArr = noteArr.concat(notes[key])
          }
        }
      } else {
        var index = +this.$route.params.foldername.split('-')[1]
        if (notes[this.folder[1]]) {
          noteArr = noteArr.concat(notes[this.folder[1]])
        }
        if (this.folder[0]) {
          for (var i = 0; i < folders[index + 1].length; i++) {
            var cur = folders[index + 1][i]
            if (cur[1].split('.').slice(0, -1).join('.') === this.folder[1]) {
              if (notes[cur[1]]) {
                noteArr = noteArr.concat(notes[cur[1]])
              }
              if (cur[0]) {
                for (var j = 0; j < folders[index + 2].length; j++) {
                  var temp = folders[index + 2][j]
                  if (temp[1].split('.').slice(0, -1).join('.') === cur[1]) {
                    if (notes[temp[1]]) {
                      noteArr = noteArr.concat(notes[temp[1]])
                    }
                  }
                }
              }
            }
          }
        }
      }
      noteArr.sort(function (a, b) {
        return a.time > b.time ? -1 : 1
      })
      for (let k = 0, p = 0; k < noteArr.length; k++) {
        var note = noteArr[k]
        if (!ret[p]) {
          ret[p] = {}
          ret[p].time = note.time.slice(0, 7)
          ret[p].notes = [note]
        } else {
          if (note.time.slice(0, 7) === ret[p].time) {
            ret[p].notes.push(note)
          } else {
            p++
            ret[p] = {}
            ret[p].time = note.time.slice(0, 7)
            ret[p].notes = [note]
          }
        }
      }
      return ret
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    goback: function () {
      this.$router.go(-1)
    },
    openNote: function (note) {
      this.$router.push({name: 'notedetail', params: {id: note.id}})
    }
  },
  components: {}
}
</script>

<style>
.icon-share{
    float:right;
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
}
.note-detail-remind{
    width:100%;
    height:60px;
    line-height: 60px;
    padding-left:20px;
    box-sizing: border-box;
    color:#000;
    background:#fff;
    font-size: 1.4em;
    text-align: center;
}
.fillfixed{
    width:100%;
    height:63px;
}
.note-notelist-content{
    padding:10px 0;
    line-height: 1.5em;
}
.note-notelist-time{
    padding:15px 20px;
    background: #f3f3f3;
    color:#7D7B7B;
}
.note-notelist-note{
    padding:15px 20px 40px 20px;
}
.note-notelist-note:not(:last-child){
    border-bottom: 1px solid #ccc;
}
.note-notelist-note-time, .note-notelist-note-path{
    font-size: .6em;
    color:#2277BF;
    margin-right:10px;
}
.note-notelist-note-content{
    font-size: .8em;
    margin-top:10px;
}
</style>
