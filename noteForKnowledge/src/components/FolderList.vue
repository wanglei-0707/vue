<template>
  <div>
      <ul class="note-notelist">
          <li v-for="(item, index) in noteList" class="note-notefolder" @click="openFolder(item, index)">
              {{item.name}}
              <span class="note-notenumber"></span>
              <span v-if="item.childFolder" class="note-dropdownicon"  @click="openChildFolder">
                  <i class="iconfont icon-xiangxiajiantou"></i>
              </span>
              <ul class="note-childfolderlist">
                  <li v-for="folder in item.childFolder" class="note-childfolder" @click="openFolder()">
                      <div class="note-childfolder-redline"></div>
                      {{folder.name}}
                      <span v-if="folder.childFolder" class="note-dropdownicon"  @click="openChildFolder">
                          <i class="iconfont icon-xiangxiajiantou"></i>
                      </span>
                      <ul class="note-second-childfolderlist">
                          <li v-for="fd in folder.childFolder" class="note-childfolder note-second-childfolder">
                              {{fd.name}}
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
    noteList: function () {
      return this.$store.state.noteList
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    openChildFolder: event => {
      event.stopPropagation()
      event.currentTarget.classList.toggle('up')
      event.currentTarget.nextElementSibling.classList.toggle('show')
    },
    openFolder: function (folder, index) {
      this.$router.push({name: 'notelist', params: {foldername: folder.name + '-' + index}})
    }
  },
  components: {}
}
</script>

<style>
.note-notelist{
    background:#fff;
    padding:0 15px;
}
.note-notefolder{
    font-size:1.3rem;
    background: #fff;
    padding:20px 0;
    border-bottom:1px solid #D4D4D4;
}
.note-dropdownicon{
    float:right;
}
.up{
    transform:rotate(180deg);
}
.note-childfolderlist{
    display: none;
    background:#F3F3F3;
    margin:20px -15px -20px -15px;
    padding:0 15px;
}
.note-childfolder{
    position: relative;
    padding:20px 60px;
    padding-right:0;
    border-bottom:1px solid #D4D4D4;
}
.note-childfolder-redline{
    position: absolute;
    top:0;
    left:20px;
    width:4px;
    height:100%;
    border-left:1px solid #E26262;
    border-right:1px solid #E26262;
}
.note-childfolder:last-child{
    border-bottom:none;
}
.note-second-childfolderlist{
    display: none;
    background:#F3F3F3;
    margin:20px -15px -20px -75px;
    padding:0 15px;
}
.note-second-childfolder{
    padding-left:80px;
}
.note-second-childfolder:first-child{
    border-top:1px solid #D4D4D4;
}
.show{
    display: block;
}
</style>
