<template>
    <div>
        <header class="note-detail-header">
            <i class="iconfont icon icon-jiantou-copy left-icon" @click="goback"></i>
            <h1 class="note-detail-header-title">文件夹：/{{ foldername }}/</h1>
            <div class="note-header-icons">
                <i class="iconfont icon icon-sousuo"></i>
                <i class="iconfont icon icon-share"></i>
            <div>
        </header>
        <div class="note-detail-remind">
            今日提醒0
        </div>
        <div class="note-detail-content">
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
    foldername: function () {
      return this.$route.params.foldername.split('-')[0]
    },
    notes: function () {
      let parentFolderName = this.$route.params.foldername.split('-')[0]
      let index = this.$route.params.foldername.split('-')[1]
      let rootFolder = this.$store.state.noteList[index]
      let notes = []
      if (rootFolder.childFolder) {
        rootFolder.childFolder.forEach(childFolder => {
          if (childFolder.childFolder) {
            childFolder.childFolder.forEach(folder => {
              folder.notes.forEach(note => {
                note.path = '/' + parentFolderName + '/' + childFolder.name + '/' + folder.name + '/'
              })
              Array.prototype.push.apply(notes, folder.notes)
            })
          } else {
            childFolder.notes.forEach(note => {
              note.path = '/' + parentFolderName + '/' + childFolder.name + '/'
            })
            Array.prototype.push.apply(notes, childFolder.notes)
          }
        })
      } else {
        rootFolder.notes.forEach(note => {
          note.path = '/' + parentFolderName + '/'
        })
        notes = rootFolder.notes
      }
      let notesObj = {}
      let notesOrderByTime = []
      // 对笔记重新排序，将同一天创建的笔记放在一起，按照时间排序
      for (let i = 0, j = 0; i < notes.length; i++) {
        let cur = notes[i]
        let time = cur.time.slice(0, 7)
        if (notesObj[time] !== undefined) {
          notesOrderByTime[notesObj[time]].notes.push(cur)
        } else {
          notesObj[time] = j++
          notesOrderByTime.push({time: time, notes: [cur]})
        }
      }
      notesOrderByTime.sort(this.compareByTime)
      notesOrderByTime.forEach(item => {
        item.notes.sort(this.compareByTime)
      })
      return notesOrderByTime
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    goback: function () {
      this.$router.go(-1)
    },
    compareByTime: function (a, b) {
      let time1 = a.time
      let time2 = b.time
      return time1 < time2 ? 1 : -1
    },
    openNote: function (note) {
      let path = note.path.split('/').slice(1, -1).join('-') + '-' + note.id
      this.$router.push({name: 'notedetail', params: {notepath: path}})
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
.note-detail-content{
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
