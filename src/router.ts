import ComponentList0 from './pages/componentList0/index.vue';
import ListOfRooms1 from './pages/listOfRooms1/index.vue';

import store from './store';

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: store.variables.routesMap.home,
        name: "home",
        component: ComponentList0
    },
    {
        path: store.variables.routesMap.listOfRooms,
        name: "listOfRooms",
        component: ListOfRooms1
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
