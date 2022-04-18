import ComponentList0 from './pages/0.componentList/index.vue';
import ListOfRooms1 from './pages/1.listOfRooms/index.vue';

export const routesMap = {
    home: "/",
    listOfRooms: "/1.listOfRooms",
}

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: routesMap.home,
        name: routesMap.home,
        component: ComponentList0
    },
    {
        path: routesMap.listOfRooms,
        name: routesMap.listOfRooms,
        component: ListOfRooms1
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
