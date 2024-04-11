import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name:'DashBoard',
        component: () => import('../components/DashBoard.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router