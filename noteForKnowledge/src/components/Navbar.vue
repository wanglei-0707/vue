<template>
  <nav>
    <ul class="note-navbar">
      <li class="note-navbtn"><router-link :to="{name: 'recently'}" class="home-link">近期</router-link></li>
      <li class="note-navbtn"><router-link to="/" class="home-link">文件夹</router-link></li>
      <li class="note-navbtn"><router-link to="/" class="home-link">标签</router-link></li>
    </ul>
  </nav>
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
  .note-navbar{
      font-size: 0;
      overflow: hidden;
      width:100%;
      position: fixed;
      top:70px;
      z-index: 100;
  }
  .note-navbtn{
      float:left;
      width:33.33%;
      height:60px;
      padding:0;
      margin:0;
      line-height: 60px;
      background: #2277BF;
      color:#E6E6E6;
      text-align: center;
      font-size: 1.1rem;
      border-bottom: 4px solid transparent;
  }
  .note-navbtn:hover{
      border-bottom:4px solid #EAA710;
  }
  .home-link{
      color:#E6E6E6;
      text-decoration: none;
  }
</style>
