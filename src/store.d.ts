export declare const variables: {
    routesMap: {
        home: string;
        listOfRooms: string;
        chatRoom: string;
        music: string;
        calendar: string;
        joystick: string;
        threejs: string;
    };
};
export declare const functions: {
    css: {
        getARandomColor: () => string;
        getARandomLightColor: () => string;
    };
    basic: {
        jsonToObj: (json: string) => any;
        objToJson: (obj: any) => string;
        dateToTimestamp: (date: Date | string) => number;
        timestampToString: (timestamp: number | null) => string;
        timestampToDateString: (timestamp: number | null) => string;
        log: (msg: any) => void;
        openALink: (url: string) => void;
        sleep: (t: number) => Promise<unknown>;
    };
    pages: {
        switchPage: (page: string, query?: any) => void;
    };
};
declare const _default: {
    variables: {
        routesMap: {
            home: string;
            listOfRooms: string;
            chatRoom: string;
            music: string;
            calendar: string;
            joystick: string;
            threejs: string;
        };
    };
    functions: {
        css: {
            getARandomColor: () => string;
            getARandomLightColor: () => string;
        };
        basic: {
            jsonToObj: (json: string) => any;
            objToJson: (obj: any) => string;
            dateToTimestamp: (date: string | Date) => number;
            timestampToString: (timestamp: number | null) => string;
            timestampToDateString: (timestamp: number | null) => string;
            log: (msg: any) => void;
            openALink: (url: string) => void;
            sleep: (t: number) => Promise<unknown>;
        };
        pages: {
            switchPage: (page: string, query?: any) => void;
        };
    };
};
export default _default;
//# sourceMappingURL=store.d.ts.map