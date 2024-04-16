import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name:'DashBoard',
        redirect:'/gpp',
        component: () => import('../components/DashBoard.vue')
    },
    {
        path:'/gpp',
        name:'gpp',
        component: () => import('../components/DashBoard.vue')
    },
    {
        path:'/spei',
        name:'spei',
        component: () => import('../components/DashBoard.vue')
    },
    {
        path:'/xiangguan',
        name:'xiangguan',
        component: () => import('../components/DashBoard.vue')
    },
    {
        path:'/tezheng',
        name:'tezheng',
        component: () => import('../components/DashBoard.vue')
    },
    {
        path:'/shijian',
        name:'shijian',
        component: () => import('../components/DashBoard.vue')
    },
    {
        path:'/yingxiang',
        name:'yingxiang',
        component: () => import('../components/DashBoard.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router