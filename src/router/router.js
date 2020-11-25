import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home/home.vue'
import user from '../components/user/user.vue'
import phone from '../components/childPage/phone.vue'
import tablet from '../components/childPage/tablet.vue'
import computer from '../components/childPage/computer.vue'
import login from '../components/login/login.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: home,
        children: [
            {
                path: 'phone',
                component: phone
            },
            {
                path: 'tablet',
                component: tablet
            },
            {
                path: 'computer',
                component: computer
            },
            {
                path: "",
                component: phone
            }
        ]
    },
    /*新增user路径，配置了动态的id*/
    {
        path: "/user/:id",
        component: user
    },
    {
        path: "/login",
        component: login
    },
    {
        path: '/', 
        redirect: '/login' 
    }
]

var router = new VueRouter({
    routes
})

export default router