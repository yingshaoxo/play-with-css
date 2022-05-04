import { reactive } from 'vue';
import { router } from './router';
export const variables = reactive({
    routesMap: {
        home: '/',
        listOfRooms: '/listOfRooms',
        chatRoom: '/chatRoom',
        music: '/music',
        calendar: '/calendar',
        joystick: '/joystick',
        threejs: '/threejs',
    },
});
export const functions = reactive({
    css: {
        getARandomColor: () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        getARandomLightColor: () => {
            const color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
            return color;
        },
    },
    basic: {
        jsonToObj(json) {
            return JSON.parse(json);
        },
        objToJson(obj) {
            return JSON.stringify(obj);
        },
        dateToTimestamp(date) {
            if (typeof date === 'string') {
                date = new Date(date);
            }
            return date.getTime();
        },
        timestampToString(timestamp) {
            if (timestamp === null) {
                return '';
            }
            return new Date(timestamp).toLocaleString();
        },
        timestampToDateString(timestamp) {
            if (timestamp === null) {
                return '';
            }
            return new Date(timestamp).toLocaleDateString();
        },
        log: (msg) => {
            console.log(msg);
        },
        openALink: (url) => {
            window.open(url);
        },
        sleep: (t) => new Promise(s => setTimeout(s, t)),
    },
    pages: {
        switchPage: (page, query) => {
            if (query) {
                router.push({ path: page, query });
            }
            else {
                router.push(page);
            }
        },
    },
});
export default {
    variables,
    functions,
};
//# sourceMappingURL=store.js.map