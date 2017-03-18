<template>
  <div>
      <ul class="note-notelist" v-if="folderList[0][0]">
          <li v-for="(folder, index) in folderList[1]" class="note-notefolder" @click.stop="openFolder(folder, '1-' + index)">
              {{ folder[2] }}
              <span class="note-notenumber"></span>
              <span v-if="folder[0]" class="note-dropdownicon"  @click="openChildFolder">
                  <i class="iconfont icon-xiangxiajiantou"></i>
              </span>
              <ul class="note-childfolderlist">
                  <li v-for="(fd, ind) in folderList[2]" v-if="fd[1].split('.').slice(0, 2).join('.') == folder[1].split('.').join('.')" class="note-childfolder" @click.stop="openFolder(fd, '2-' + ind)">
                      <div class="note-childfolder-redline"></div>
                      {{ fd[2] }}
                      <span v-if="fd[0]" class="note-dropdownicon"  @click="openChildFolder">
                          <i class="iconfont icon-xiangxiajiantou"></i>
                      </span>
                      <ul class="note-second-childfolderlist">
                          <li v-for="(f, i) in folderList[3]" v-if="f[1].split('.').slice(0, 3).join('.') == fd[1].split('.').join('.')" class="note-childfolder note-second-childfolder" @click.stop="openFolder(f, '3-' + i)">
                              {{ f[2] }}
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
    folderList: function () {
      return this.$store.state.folders
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
      this.$router.push({name: 'notelist', params: {foldername: folder[2] + '-' + index}})
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
