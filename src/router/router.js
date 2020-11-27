import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home/home.vue'
import childhome from '../components/childPage/home.vue'
import login from '../components/login/login.vue'
import userM from '../components/systemManagement/userManagement.vue'
import roleM from '../components/systemManagement/roleManagement.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: home,
        meta: {index: 1},
        children: [
            {
                name: 'childhome',
                path: '/childhome',
                component: childhome,
                meta: {index: 1}
            },
            {
                name: 'userM',
                path: 'userM',
                component: userM,
                meta: {index: 2}
            },
            {
                name: 'roleM',
                path: 'roleM',
                component: roleM,
                meta: {index: 2}
            },
            {
                path: "",
                component: childhome,
                meta: {index: 1}
            }
        ]
    },
    {
        name: 'login',
        path: "/login",
        component: login,
        meta: {index: 1}
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