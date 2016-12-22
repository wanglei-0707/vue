// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
// import LogTime from './components/LogTime'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
// Vue.use(VueResource)

const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/home', component: Home},
        {
            path: '/time-entries',
            component: TimeEntries,
            children: [
                {path: 'log-time', component: resolve => require(['./components/LogTime.vue'], resolve)}
            ]
        }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
