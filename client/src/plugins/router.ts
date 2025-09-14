import { createWebHistory, createRouter } from 'vue-router'

import MainPage from '@pages/index.vue'
import NotePage from '@pages/notes/[id].vue'

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    }, {
        path: '/notes/:id',
        name: 'NotePage',
        component: NotePage
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})