// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import List from './components/List'
import New from './components/New'
import Check from './components/Check'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: List},
        {path: '/list', component: List},
        {path: '/new', component: New},
        {path: '/edit/:id', name: 'edit', component: New},
        {path: '/check/:id', name: 'check', component: Check},
        {path: '/view/:id', name: 'view', component: Check}
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
