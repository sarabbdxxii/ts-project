import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/hello',
            name: 'hello',
            component: () => import('../components/HelloWorld.vue')
        },
        {
            path: '/showList',
            name: 'showList',
            component: () => import('../components/ShowList.vue')
        }
    ]
})