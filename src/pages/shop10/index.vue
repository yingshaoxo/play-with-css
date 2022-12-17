<script lang="ts" setup>
import {
    reactive,
    withDefaults,
    computed,
    onMounted,
    watch,
    ref,
    onActivated,
    onDeactivated,
    onBeforeUnmount,
} from "vue";

import store from "../../store";

import alipay_payment_qr_code_picture from "../../assets/shop10/my_alipay_income.png";

import { useStorage } from "@vueuse/core";

const dict = reactive({
    tempData: {},
    data: {
        is_en_broswer: false,
        is_mobile_device: true,
        landscape_mode: false,
    },
    functions: {
        is_en_broswer() {
            let language = window.navigator.language;
            if (language.startsWith("en-")) {
                return true;
            }
            return false;
        },
        check_if_it_is_in_landscape_mode: () => {
            dict.data.landscape_mode = window.innerHeight < window.innerWidth;
        },
    },
});

const in_full_screen = ref(false);
const toggle_full_screen = () => {
    if (in_full_screen.value) {
        const document_ = document as any;
        if (document_.exitFullscreen) {
            document_.exitFullscreen();
        } else if (document_?.webkitExitFullscreen) {
            /* Safari */
            document_?.webkitExitFullscreen();
        } else if (document_?.msExitFullscreen) {
            /* IE11 */
            document_?.msExitFullscreen();
        }
        in_full_screen.value = false;
    } else {
        const element = document.documentElement as any;
        // const element = dict.references.backgroundElement as any
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element?.mozRequestFullScreen) {
            element?.mozRequestFullScreen();
        } else if (element?.webkitRequestFullscreen) {
            element?.webkitRequestFullscreen();
        } else if (element?.msRequestFullscreen) {
            element?.msRequestFullscreen();
        }
        in_full_screen.value = true;
    }
};

const language = useStorage("language", "en");
const resize_handle_function = () => {
    dict.functions.check_if_it_is_in_landscape_mode();
};

onMounted(async () => {
    dict.data.is_en_broswer = dict.functions.is_en_broswer();
    dict.functions.check_if_it_is_in_landscape_mode();

    window.addEventListener("resize", resize_handle_function);
});

// onDeactivated(async () => {
//   document.removeEventListener('keydown', keydownListener)
// })

onBeforeUnmount(async () => {
    window.removeEventListener("resize", resize_handle_function);
});
</script>

<template>
    <div class="w-screen h-screen">
        <div
            v-if="!dict.data.landscape_mode"
            class="w-full h-full flex flex-col justify-center content-center text-center text-xl"
        >
            Please rotate your screen to see it.
        </div>
        <div
            v-if="dict.data.landscape_mode"
            class="w-full h-full flex bg-indigo-500"
        >
            <div class="w-1/2 flex justify-end items-center">
                <img
                    class="h-full max-h-[480px]"
                    :src="alipay_payment_qr_code_picture"
                    @click="toggle_full_screen"
                />
            </div>
            <div
                class="w-1/2 flex justify-center 2xl:justify-start items-center"
            >
                <div class="2xl:ml-36 text-white text-3xl">
                    <div
                        @click="
                            () => {
                                language = language == 'en' ? 'cn' : 'en';
                            }
                        "
                    >
                        {{ language == "en" ? "Sell!" : "售卖！" }}
                    </div>
                    <div class="mt-8">
                        {{
                            language == "en"
                                ? "2$ per one."
                                : "面包(方便面) 3元 一个"
                        }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "../../tailwind.css";
</style>
