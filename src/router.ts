import Index from './Index.vue'
import ListOfRooms1 from './pages/listOfRooms1/index.vue'
import ChatRoom2 from './pages/chatRoom2/index.vue'
import Music3 from './pages/music3/index.vue'
import Calendar4 from './pages/calendar4/index.vue'
import Joystick5 from './pages/joystick5/index.vue'
import ThreeJS6 from './pages/threejs6/index.vue'
import InfoPage7 from './pages/infoPage7/index.vue'
import speed8 from './pages/speed8/index.vue'
import typing9 from './pages/typing/index.vue'

import store from './store'

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: store.variables.routesMap.home,
    name: 'home',
    component: Index,
  },
  {
    path: store.variables.routesMap.listOfRooms,
    name: 'listOfRooms',
    component: ListOfRooms1,
  },
  {
    path: store.variables.routesMap.chatRoom,
    name: 'chatRoom',
    component: ChatRoom2,
  },
  {
    path: store.variables.routesMap.music,
    name: 'music',
    component: Music3,
  },
  {
    path: store.variables.routesMap.calendar,
    name: 'calendar',
    component: Calendar4,
  },
  {
    path: store.variables.routesMap.joystick,
    name: 'joystick',
    component: Joystick5,
  },
  {
    path: store.variables.routesMap.threejs,
    name: 'threejs',
    component: ThreeJS6,
  },
  {
    path: store.variables.routesMap.infoPage,
    name: 'infoPage',
    component: InfoPage7,
  },
  {
    path: store.variables.routesMap.speed,
    name: 'speed',
    component: speed8,
  },
  {
    path: store.variables.routesMap.typing,
    name: 'typing',
    component: typing9,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
