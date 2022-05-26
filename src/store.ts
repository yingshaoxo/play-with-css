import { computed, reactive } from 'vue'

import { router } from './router'

export const variables = reactive({
  routesMap: {
    home: '/',
    listOfRooms: '/listOfRooms',
    chatRoom: '/chatRoom',
    music: '/music',
    calendar: '/calendar',
    joystick: '/joystick',
    threejs: '/threejs',
    infoPage: '/infoPage',
    speed: '/speed',
    typing: '/typing',
  },
})

export const functions = reactive({
  css: {
    getARandomColor: () => {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    getARandomLightColor: () => {
      const color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
      return color
    },
  },
  basic: {
    jsonToObj(json: string) {
      return JSON.parse(json)
    },
    objToJson(obj: any) {
      return JSON.stringify(obj)
    },
    dateToTimestamp(date: Date | string) {
      if (typeof date === 'string') {
        date = new Date(date)
      }
      return date.getTime()
    },
    timestampToString(timestamp: number | null) {
      if (timestamp === null) {
        return ''
      }
      return new Date(timestamp).toLocaleString()
    },
    timestampToDateString(timestamp: number | null) {
      if (timestamp === null) {
        return ''
      }
      return new Date(timestamp).toLocaleDateString()
    },
    log: (msg: any) => {
      console.log(msg)
    },
    openALink: (url: string) => {
      window.open(url)
    },
    sleep: (t: number) => new Promise(s => setTimeout(s, t)),
  },
  pages: {
    switchPage: (page: string, query?: any) => {
      if (query) {
        router.push({ path: page, query })
      } else {
        router.push(page)
      }
    },
  },
})

export default {
  variables,
  functions,
}