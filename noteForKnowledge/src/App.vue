<template>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header'
import Navbar from './components/Navbar'
import Add from './components/Add'

export default {
  name: 'app',
  data: function () {
    return {}
  },
  components: {
    noteHeader: Header,
    navbar: Navbar,
    add: Add
  }
}
</script>

<style>
    @media screen and (min-width: 1024px){
        .note-body{
            width:60vw;
            margin:0 auto;
        }
    }
</style>
