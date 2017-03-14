<template>
    <div>
        <note-header></note-header>
        <navbar></navbar>
        <router-view></router-view>
        <add></add>
    </div>
</template>

<script>
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Add from '../components/Add'

export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    noteHeader: Header,
    navbar: Navbar,
    add: Add
  }
}
</script>

<style lang="css">
</style>
