<template>
    <div>
        <navbar></navbar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
    name: 'app',
    components: {
        Navbar
    }
}
</script>

<style src="./css/reset.css"></style>
<style>
    body{
        background:rgb(239,239,239);
        font-family:"微软雅黑";
    }
    .content{
        width:70%;
        min-height:200px;
        margin:200px auto;
        padding:30px;
        box-sizing: border-box;
        box-shadow: 1px 1px 3px #ddd;
        background:#fff;
        /*text-align: center;*/
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
