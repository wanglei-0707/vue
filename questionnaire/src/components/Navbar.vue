<template>
    <nav class="nav-navbar">
        <router-link to="/list" class="nav-name">问卷管理</router-link>
        <span class="nav-user">{{ user.name }}</span>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
</script>

<style>
    .nav-navbar{
        width:100%;
        background-color: rgb(247, 120, 2);
        color:#fff;
        height:50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position:fixed;
        top:0;
        left:0;
        z-index:10
    }
    .nav-name{
        font-size: 20px;
        font-weight: bold;
        color:#fff;
        margin:0 100px;
        text-decoration: none;
    }
    .nav-name::before{
        content:"?";
        width:1em;
        height:1em;
        border-radius: .5em;
        color:rgb(247, 120, 2);
        background-color: #fff;
        float:left;
        margin-right:.2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav-user{
        color:rgb(239,239,239);
        font-size: 12px;
        float:left;
    }
</style>
