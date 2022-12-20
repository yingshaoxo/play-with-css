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
} from "vue";

import store from "../../store";

import { useStorage } from "@vueuse/core";

const dict = reactive({
    tempData: {},
    data: {},
    functions: {},
});

const language = useStorage("language", "en");

onMounted(async () => {});

// onDeactivated(async () => {
//   document.removeEventListener('keydown', keydownListener)
// })
</script>

<template>
    <div class="the_page">
        <div class="container">
            <div class="header">
                <div class="info">
                    <div class="title">YingJie Hu</div>
                    <div class="general_rows">
                        <div>
                            <span
                                class="email"
                                @click="
                                    async () => {
                                        await store.functions.basic.copy_text_to_clipboard(
                                            'yingshaoxo@gmail.com'
                                        );
                                        store.functions.basic.pop_up_a_message_window(
                                            'Email Address Copied.'
                                        );
                                    }
                                "
                                >yingshaoxo@gmail.com</span
                            >
                            | (+86) 17508265307
                        </div>
                        <div class="website">
                            <a href="https://yingshaoxo.xyz" target="_blank"
                                >https://yingshaoxo.xyz</a
                            >
                        </div>
                        <div>24丨 Male丨 170丨 Single</div>
                        <div>Free丨 ShenZhen丨 Software Engineer丨 16k-20k</div>
                    </div>
                </div>
                <div class="head_image">
                    <img src="https://yingshaoxo.xyz/yingshaoxo_files/me.jpg" />
                </div>
            </div>
            <div class="body">
                <div class="big_part">
                    <div class="title_line">
                        <div class="leading_symbol">|</div>
                        <div class="title">PROFESSIONAL EXPERIENCE</div>
                    </div>
                    <div class="content">
                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Open Source Contributor</div>
                                <div class="b">2016 - now</div>
                            </div>
                            <div class="second_line">
                                <div class="a">Software Engineer</div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    Create all kinds of crazy projects by
                                    utilize different programming languages.
                                </div>
                                <div class="line">
                                    I use
                                    <span class="important_text">
                                        Python, Javascript, Dart, Golang, Rust,
                                        Kotlin, Java, C#, C/CPP
                                    </span>
                                    to solve problems.
                                </div>
                                <div class="line">
                                    For the framesworks I have used, it almost
                                    countless. But I could list some here.
                                </div>
                                <div class="line">
                                    For Python:
                                    <span class="less_obvious_text">
                                        Flask, FastAPI, Django, Numpy, Pandas,
                                        Keras, Pytorch, transformers, librosa,
                                        MoviePy, databases, pyboard
                                    </span>
                                </div>
                                <div class="line">
                                    For Javascript/TS:
                                    <span class="less_obvious_text">
                                        React.js, Vue3, AntDesign, Element Plus,
                                        Electron, Express, mongoose
                                    </span>
                                </div>
                                <div class="line">
                                    For Database:
                                    <span class="less_obvious_text">
                                        Sqlite, MySQL, MongoDB
                                    </span>
                                </div>
                                <div class="line">
                                    For Protocols:
                                    <span class="less_obvious_text">
                                        RESTful API, Websocks, GRPC, GraphQL
                                    </span>
                                </div>
                                <div class="line">
                                    For Flutter/Dart:
                                    <span class="less_obvious_text">
                                        Getx, hive, sqflite, auto_size_text
                                    </span>
                                </div>
                                <div class="line">
                                    For Golang:
                                    <span class="less_obvious_text">
                                        Gin, GORM, gox, go.rice,
                                        telegram-bot-api
                                    </span>
                                </div>
                                <div class="line">
                                    For C#:
                                    <span class="less_obvious_text">
                                        Unity
                                    </span>
                                </div>
                                <div class="line">
                                    For Java:
                                    <span class="less_obvious_text">
                                        Spring Boot
                                    </span>
                                </div>
                                <div class="line">
                                    For Rust:
                                    <span class="less_obvious_text">
                                        tonic
                                    </span>
                                </div>
                                <div class="line">
                                    For C/CPP:
                                    <span class="less_obvious_text">
                                        Arduino, MSP430
                                    </span>
                                </div>
                                <div class="line">
                                    For CSS:
                                    <span class="less_obvious_text">
                                        SCSS, LESS, Tailwind CSS
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Fargo Wealth Group</div>
                                <div class="b">2021 - 2022</div>
                            </div>
                            <div class="second_line">
                                <div class="a">Software Engineer</div>
                                <div class="b">ShenZhen</div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    1. Use Python(Flask) and React(antdesin) to
                                    make research posts publish platform.
                                </div>
                                <div class="line">
                                    2. Use Flutter(getx) to make the home page
                                    of a stock app. It includes the market
                                    overview page and the detail page of a
                                    stock.
                                </div>
                                <div class="line">
                                    3. Use vue3(vite) and typescript to make the
                                    desktop version admin system that manages
                                    the process for a general stockbroker
                                    provider. (Including account opening and
                                    currency exchange
                                </div>
                                <div class="line">
                                    Details:
                                    <a
                                        class="green"
                                        href="https://matching.turing.com/developer-resume/bbb4fd3b756ddfbbd2c498cb67e12faf465db613aecc54"
                                        target="_blank"
                                        >https://matching.turing.com/developer-resume/bbb4fd3b756ddfbbd2c498cb67e12faf465db613aecc54</a
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">FinPoints</div>
                                <div class="b">2022 - 2023</div>
                            </div>
                            <div class="second_line">
                                <div class="a">Software Engineer</div>
                                <div class="b">Remote</div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    1. Make their official websites.
                                </div>
                                <div class="line">
                                    2. Make email template system.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="big_part">
                    <div class="title_line">
                        <div class="leading_symbol">|</div>
                        <div class="title">LEADERSHIP EXPERIENCE</div>
                    </div>
                    <div class="content">
                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">PyCon China</div>
                                <div class="b">2021</div>
                            </div>
                            <div class="second_line">
                                <div class="a">Speaker</div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    I made a speech:
                                    <a
                                        class="purple"
                                        href="https://bbs.csdn.net/topics/603121594"
                                        target="_blank"
                                    >
                                        https://bbs.csdn.net/topics/603121594
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="big_part">
                    <div class="title_line">
                        <div class="leading_symbol">|</div>
                        <div class="title">EDUCATION</div>
                    </div>
                    <div class="content">
                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Google</div>
                                <div class="b">Jun 2015 - Now</div>
                            </div>
                            <div class="second_line">
                                <div class="a less_obvious_text">
                                    Life and Coding
                                </div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    Google taught me a lot of things.
                                </div>
                            </div>
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">LiYang Crazy English</div>
                                <div class="b"></div>
                            </div>
                            <div class="second_line">
                                <div class="a less_obvious_text">
                                    Fluent English Speaker
                                </div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    It's never too old to learn.
                                </div>
                            </div>
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Library Genesis</div>
                                <div class="b"></div>
                            </div>
                            <div class="second_line">
                                <div class="a less_obvious_text">
                                    Life Long Learner
                                </div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    As a beginner for one field, start from
                                    reading a book is a good idea.
                                </div>
                            </div>
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Khan Academy</div>
                                <div class="b"></div>
                            </div>
                            <div class="second_line">
                                <div class="a less_obvious_text">
                                    English Math Learner
                                </div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    Did you ever think Chinese Math Explanation
                                    sucks? That's why I learn high-level math in
                                    Khan Academy.
                                </div>
                            </div>
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">
                                    Nanjing Institute Of Railway Technology
                                </div>
                                <div class="b">Jun 2017 - Sep 2020</div>
                            </div>
                            <div class="second_line">
                                <div class="a less_obvious_text">
                                    Communication and Information Technology,
                                    Associate Degree
                                </div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    1. College English Levels 4 and 6.
                                </div>
                                <div class="line">
                                    2. A lot of prizes for robot matches.
                                </div>
                            </div>
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Beijing Jiaotong University</div>
                                <div class="b">Sep 2021 - Jan 2024</div>
                                <!-- 2021.09.01--2024.01.01 -->
                            </div>
                            <div class="second_line">
                                <div class="a less_obvious_text">
                                    Computer Science and Technology, Bachelor
                                </div>
                                <div class="b"></div>
                            </div>
                            <!-- <div class="more_lines">
                                <div class="line">
                                    1. College English Levels 4 and 6.
                                </div>
                                <div class="line">
                                    2. A lot of prizes for robot matches.
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>

                <div class="big_part">
                    <div class="title_line">
                        <div class="leading_symbol">|</div>
                        <div class="title">LIFE STYLE</div>
                    </div>
                    <div class="content">
                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Language</div>
                                <div class="b"></div>
                            </div>
                            <div class="second_line_justify_start">
                                <div class="a">English</div>
                                <div class="b">Chinese</div>
                            </div>
                            <!-- <div class="more_lines">
                                <div class="line">
                                </div>
                            </div> -->
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Interests</div>
                                <div class="b"></div>
                            </div>
                            <!-- <div class="second_line_justify_start">
                                <div class="a"></div>
                                <div class="b"></div>
                            </div> -->
                            <div class="more_lines">
                                <div class="line">
                                    Github:
                                    <a
                                        href="https://github.com/yingshaoxo"
                                        target="_blank"
                                        >https://github.com/yingshaoxo</a
                                    >
                                </div>

                                <div class="line">
                                    Youtuber:
                                    <a
                                        class="red"
                                        href="https://www.youtube.com/channel/UCbT9GDmkqf555ATReJor6ag"
                                        target="_blank"
                                        >https://www.youtube.com/channel/UCbT9GDmkqf555ATReJor6ag</a
                                    >
                                </div>

                                <div class="line">
                                    Twitter:
                                    <a
                                        class="blue"
                                        href="https://twitter.com/yingshaoxo"
                                        target="_blank"
                                        >https://twitter.com/yingshaoxo</a
                                    >
                                </div>

                                <div class="line">
                                    LeetCode:
                                    <a
                                        class="cyan_blue"
                                        href="https://leetcode.com/yingshaoxo"
                                        target="_blank"
                                        >https://leetcode.com/yingshaoxo</a
                                    >
                                </div>

                                <div class="line">
                                    Pornhub:
                                    <a class="not_really_white" href="#"
                                        >https://pornhub.com</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "../../tailwind.css";

.the_page {
    @apply w-screen;
}

.container {
    @apply w-full h-full flex flex-col justify-start content-center p-14;
}

.header {
    @apply flex flex-row justify-between content-start;

    .info {
        @apply flex flex-col justify-start content-start;
        .title {
            @apply text-left text-3xl;
        }
        .general_rows {
            .email {
                @apply text-red-500;
            }
            .website {
                @apply text-blue-400;
            }
            @apply flex flex-col justify-start content-start mt-2;
            & > div:nth-child(2) {
                @apply mt-2;
            }
            & > div:nth-child(3) {
                @apply mt-2;
            }
            & > div:nth-child(4) {
                @apply mt-1;
            }
        }
    }

    .head_image {
        @apply w-28;
    }
}

.body {
    @apply w-full h-full mt-3;
    .big_part {
        @apply mt-10;
        .title_line {
            @apply flex flex-row justify-start content-center;
            @apply bg-gradient-to-r from-blue-100 to-blue-50;
            @apply text-blue-600 font-medium;
            @apply opacity-80;
            .leading_symbol {
                @apply text-4xl font-bold mr-3;
            }
            .title {
                @apply flex flex-col justify-center content-center;
            }
        }
        .content {
            .small_part {
                @apply mt-6;
                .first_line {
                    @apply flex flex-row justify-between content-center;
                    .a {
                        @apply font-semibold;
                    }
                }
                .second_line {
                    @apply flex flex-row justify-between content-center;
                    @apply mt-3;
                }
                .second_line_justify_start {
                    .second_line();
                    @apply justify-start;
                    & > div:nth-child(1) {
                        margin-right: 20px;
                    }
                }
                .more_lines {
                    @apply flex flex-col justify-between content-center;
                    @apply mt-3;
                    & > div {
                        @apply mt-3;
                    }
                }
            }
        }
    }
}

.important_text {
    //@apply font-semibold;

    @apply text-[#F57F17];
}
.not_really_white {
    @apply text-gray-300;
}
.green {
    @apply text-[#8BC34A];
}
.purple {
    @apply text-[#3F51B5];
}
.red {
    @apply text-[#E91E63];
}
.cyan_blue {
    @apply text-[#00BFA5];
}
.blue {
    @apply text-sky-500;
}
.orange {
    @apply text-[#F57F17];
}
.less_obvious_text {
    @apply opacity-60;
}
</style>
