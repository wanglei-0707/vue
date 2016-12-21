<template>
    <div id="wrapper">
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <i class="glyphicon glyphicon-time"></i>
                        计划板
                    </a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/home">首页</router-link></li>
                        <li><router-link to="/time-entries">计划列表</router-link></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <Sidebar></Sidebar>
                </div>
                <div class="col-sm-9">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Sidebar from './components/Sidebar'

export default {
    components: {
        'Sidebar': Sidebar
    }
}
</script>

<style>

</style>
