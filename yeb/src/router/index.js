import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import Test2 from '../views/sys/Test2.vue'
import Test1 from '../views/sys/Test1.vue'
import Test3 from '../views/sys/Test3.vue'
import Test4 from '../views/sys/Test4.vue'
import Test5 from '../views/sys/Test5.vue'
import Test6 from '../views/sys/Test6.vue'
import UserInfo from "@/views/UserInfo";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        hidden:true
    },
    {
        path: '/home',
        name: '管理平台',
        component: Home,
        children:[
            {
                path: '/test1',
                name: '用户',
                component: Test1
            },
            {
                path: '/test2',
                name: '景点',
                component: Test2
            },
            {
                path: '/test3',
                name: '线路',
                component: Test3
            },
            {
                path: '/test4',
                name: '结伴',
                component: Test4
            },
            {
                path: '/test5',
                name: '评论',
                component: Test5
            },
            {
                path: '/test6',
                name: '管理员',
                component: Test6
            }
        ]
    },{
        path: '/home',
        name: '用户',
        component: Home,
        children: [
            {
                path: '/userinfo',
                name: '个人中心',
                component: UserInfo
            }
        ]
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
