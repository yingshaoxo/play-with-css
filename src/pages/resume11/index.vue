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

import ignore_chinese from "../../assets/ignore_chinese.mp3";
import my_head from "../../assets/head.jpg";

import store from "../../store";

import { useStorage } from "@vueuse/core";

const dict = reactive({
    tempData: {
      open_popups: true,
    },
    data: {
      audio: new Audio(ignore_chinese),
    },
    functions: {},
});

const language = useStorage("language", "en");


onMounted(async () => {
  window.onbeforeprint = (event) => {
    dict.tempData.open_popups = false
  };

  dict.data.audio.loop = true;
  dict.data.audio.volume = 1.0;
});

// onDeactivated(async () => {
//   document.removeEventListener('keydown', keydownListener)
// })
</script>

<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" :aria-modal="true"
      v-if="dict.tempData.open_popups"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <!-- <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div> -->
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Yingshaoxo's Thinking</h3>
                  <div class="mt-6">
                    <button class="the_play_button" @click="dict.data.audio.play();">Play My Sound</button>

                    <p class="text-sm text-gray-500">最精妙的谋杀是什么？</p>
                    <p class="text-sm text-gray-500">利用脑机接口，隔空传音，骚扰别人，直到别人主动去跳楼。</p>
                    <p class="text-sm text-gray-500">这种谋杀从各种方面看都是自杀，人们唯一没看到的，是这个人为什么自杀。</p>
                    <p class="text-sm text-gray-500">原因很简单，突如其来的大量骚扰，让对方不堪其扰，在心理防线崩溃的情况下，由于没有对脑机接口的反制手段，不得已选择自杀来自我防卫，捍卫自己的独立自主性。</p>

                    <br>
                    <p class="text-sm text-gray-500">------------------</p>
                    <p class="text-sm text-gray-500">------------------</p>
                    <br>

                    <p class="text-sm text-gray-500">中国竟然是世界上最危险的地方，</p>
                    <p class="text-sm text-gray-500">你只能买到菜刀防身，而警察可以用冲锋枪。</p>
                    <p class="text-sm text-gray-500">美国竟然是世界上最安全的国家，</p>
                    <p class="text-sm text-gray-500">因为你有自卫能力，警察有枪，你也有。</p>
                    <p class="text-sm text-gray-500">(人是否分为好人与坏人？警察是不是人？所以警察也可能是坏人。领导是不是人？所以最高领导人也可能是坏人。)</p>
                    <p class="text-sm text-gray-500">#idea #突然的发现 #yingshaoxo</p>

                    <br>
                    <p class="text-sm text-gray-500">------------------</p>
                    <p class="text-sm text-gray-500">------------------</p>
                    <br>

                    <p class="text-sm text-gray-500">Soft language violence, thinking pollution is bad for people.</p>
                    <p class="text-sm text-gray-500">Anyone who uses it on other people for their own good is bad guy.</p>

                    <br>
                    <p class="text-sm text-gray-500">------------------</p>
                    <br>

                    <p class="text-sm text-gray-500">如果 习近平、共产党、国内主席等 都是幌子，都是 不存在的东西，</p>
                    <p class="text-sm text-gray-500">那谁是皇上？</p>

                    <br>
                    <p class="text-sm text-gray-500">------------------</p>
                    <br>

                    <p class="text-sm text-gray-500">不存在的原因：</p>
                    <p class="text-sm text-gray-500">1. 数据库里 查无此人 </p>
                    <p class="text-sm text-gray-500">2. 你没法 亲自见到 (视频可能都是 AI自动生成的)</p>

                    <br>
                    <p class="text-sm text-gray-500">------------------</p>
                    <br>

                    <p class="text-sm text-gray-500">从各种迹象来看</p>
                    <p class="text-sm text-gray-500">一直对你进行脑机监控的人，从技术上来讲都是傻屌，她们不知道未来会发生什么</p>
                    <p class="text-sm text-gray-500">他们唯一比你强的地方，就是他们会玩人</p>
                    <p class="text-sm text-gray-500">因为玩得比较久</p>
                    <p class="text-sm text-gray-500">(他们甚至可能伪装成你的父母、亲戚，来欺骗你</p>
                    <p class="text-sm text-gray-500">#1984 #Chinese</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                @click="dict.tempData.open_popups = false"
              >I Agree</button>
            </div>
          </div>
        </div>
      </div>
    </div>

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
                            <!-- | (+86) 17508265307 -->
                            | @yingshaoxo
                        </div>
                        <div class="website">
                            <a href="https://yingshaoxo.xyz" target="_blank"
                                >https://yingshaoxo.xyz</a
                            >
                        </div>
                        <div>25丨 Male丨 170丨 Single</div>
                        <div>
                            Job Seeking丨 ShenZhen丨 Software Engineer丨 16k-20k
                        </div>
                    </div>
                </div>
                <div class="head_image">
                    <img :src="my_head" />
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
                                <div class="a">Products I made</div>
                                <div class="b">2016 - now</div>
                            </div>
                            <div class="second_line">
                                <div class="a">As an individual developer</div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    Website, <span class="red">Style Shop</span>:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://style_shop.ai-tools-online.xyz"
                                            target="_blank"
                                            >https://style_shop.ai-tools-online.xyz</a
                                        >
                                    </span>
                                </div>
                                <div class="line">
                                    Website, <span class="green">It has alternatives</span>:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://alternatives.ai-tools-online.xyz"
                                            target="_blank"
                                            >https://alternatives.ai-tools-online.xyz</a
                                        >
                                    </span>
                                </div>
                                <div class="line">
                                    Android App, <span class="blue">Freedom</span>:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=xyz.yingshaoxo.freedom"
                                            target="_blank"
                                            >https://play.google.com/store/apps/details?id=xyz.yingshaoxo.freedom</a
                                        >
                                    </span>
                                </div>
                                <div class="line">
                                    Android App, <span class="cyan_blue">Atlantis Space</span>:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=xyz.yingshaoxo.atlantis_space"
                                            target="_blank"
                                            >https://play.google.com/store/apps/details?id=xyz.yingshaoxo.atlantis_space</a
                                        >
                                    </span>
                                </div>
                                <div class="line">
                                    Android App, <span class="silver">Subtitle Killer</span>:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=xyz.yingshaoxo.android.subtitlekiller"
                                            target="_blank"
                                            >https://play.google.com/store/apps/details?id=xyz.yingshaoxo.android.subtitlekiller</a
                                        >
                                    </span>
                                </div>
                                <div class="line">
                                    Android App, <span class="pink">WeLoveParty</span>:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://github.com/yingshaoxo/we_love_party"
                                            target="_blank"
                                            >https://github.com/yingshaoxo/we_love_party</a
                                        >
                                    </span>
                                </div>
                            </div>
                        </div>

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
                                        Vue3, React.js, AntDesign, Element Plus,
                                        Electron, Express, mongoose
                                    </span>
                                </div>
                                <div class="line">
                                    For Database:
                                    <span class="less_obvious_text">
                                        MongoDB, MySQL, Sqlite
                                    </span>
                                </div>
                                <div class="line">
                                    For Protocols:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://github.com/yingshaoxo/auto_everything#for-simplifying-general-server-and-client-development"
                                            target="_blank"
                                        >YRPC</a>, GRPC, RESTful API, Websocks, GraphQL
                                    </span>
                                </div>
                                <div class="line">
                                    For Flutter/Dart:
                                    <span class="less_obvious_text">
                                        Getx, sqflite, auto_size_text, hive
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
                                    For Golang:
                                    <span class="less_obvious_text">
                                        Gin, GORM, gox, telegram-bot-api
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
                                <div class="line pink">
                                    > DevOps and CI/CD is not a problem for me.
                                </div>
                                <!-- <div class="line green">
                                    Representative Project:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://github.com/weneedparty"
                                            target="_blank"
                                            >https://github.com/weneedparty</a
                                        >
                                    </span>
                                </div> -->
                                <!-- <div class="line blue">
                                    Representative App:
                                    <span class="less_obvious_text">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=xyz.yingshaoxo.freedom"
                                            target="_blank"
                                            >https://play.google.com/store/apps/details?id=xyz.yingshaoxo.freedom</a
                                        >
                                    </span>
                                </div> -->
                            </div>
                        </div>

                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">
                                    Fargo Wealth Group
                                    <span class="less_obvious_text smaller_text"
                                        >(Financial)</span
                                    >
                                </div>
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
                                    of a stock app. It includes the realtime
                                    market overview page and the detail page of
                                    a stock.
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
                                <div class="a">
                                    FinPoints
                                    <span class="less_obvious_text smaller_text"
                                        >(Financial)</span
                                    >
                                </div>
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
                                <div class="a">Fake High School</div>
                                <div class="b">Jun 2017 - Forever</div>
                            </div>
                            <div class="second_line">
                                <div class="a less_obvious_text">
                                    I indeed had a college life before, but it
                                    seems like from the class I didn't learn
                                    anything useful. And others in the China
                                    Mainland also think that kind of education
                                    is useless, so I would like to claim that
                                    I'm just a high school student.
                                </div>
                                <div class="b"></div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    By the way, I secretly think bachelor's
                                    education is also valueless compared to
                                    self-learning.
                                </div>
                            </div>
                        </div>

                        <!-- <div class="small_part">
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
                            </div>
                            <div class="second_line">
                                <div class="a less_obvious_text">
                                    Computer Science and Technology, Bachelor
                                </div>
                                <div class="b"></div>
                            </div>
                        </div> -->
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
                                    <span class="silver"> GitHub: </span>
                                    <a
                                        class="small_size_link"
                                        href="https://github.com/yingshaoxo"
                                        target="_blank"
                                        >https://github.com/yingshaoxo</a
                                    >
                                </div>

                                <div class="line">
                                    <span class="red"> YouTube: </span>
                                    <a
                                        class="small_size_link"
                                        href="https://www.youtube.com/channel/UCbT9GDmkqf555ATReJor6ag"
                                        target="_blank"
                                        >https://www.youtube.com/channel/UCbT9GDmkqf555ATReJor6ag</a
                                    >
                                </div>

                                <div class="line">
                                    <span class="orange"> Blog: </span>
                                    <a
                                        class="small_size_link"
                                        href="https://yingshaoxo.blogspot.com"
                                        target="_blank"
                                        >https://yingshaoxo.blogspot.com</a
                                    >
                                </div>

                                <div class="line">
                                    <span class="blue"> Twitter: </span>
                                    <a
                                        class="small_size_link"
                                        href="https://twitter.com/yingshaoxo"
                                        target="_blank"
                                        >https://twitter.com/yingshaoxo</a
                                    >
                                </div>

                                <div class="line">
                                    <span class="cyan_blue"> LeetCode: </span>
                                    <a
                                        class="small_size_link"
                                        href="https://leetcode.com/yingshaoxo"
                                        target="_blank"
                                        >https://leetcode.com/yingshaoxo</a
                                    >
                                </div>

                                <div class="line">
                                    <span class="pink"> PornHub: </span>
                                    <a class="small_size_link" href="#"
                                        >https://pornhub.com</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="big_part">
                    <div class="title_line">
                        <div class="leading_symbol">|</div>
                        <div class="title">ADVERTISEMENT</div>
                    </div>
                    <div class="content">
                        <div class="small_part">
                            <div class="first_line">
                                <div class="a">Looking For A Girlfriend</div>
                                <div class="b"></div>
                            </div>
                            <!-- <div class="second_line">
                                <div class="a less_obvious_text">
                                    #Long term friends with benefits
                                </div>
                                <div class="b">#Slim</div>
                            </div> -->
                            <div class="second_line_justify_start">
                                <div class="a less_obvious_text">
                                    #Long-term friends with benefits
                                </div>
                                <div class="b less_obvious_text">#Slim</div>
                                <div class="b less_obvious_text">
                                    #Stands with democracy
                                </div>
                            </div>
                            <div class="more_lines">
                                <div class="line">
                                    If you have interests in me,
                                </div>
                                <div class="line">
                                    Or if you think someone may fit with me,
                                </div>
                                <div class="line">
                                    Please contact me by email with her image.
                                </div>
                                <div class="line" style="margin-top: 25px">
                                    My Online Resume:
                                    <a
                                        class="green"
                                        target="_blank"
                                        href="https://yingshaoxo.xyz/play-with-css/#/resume"
                                    >
                                        https://yingshaoxo.xyz/play-with-css/#/resume
                                    </a>
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
    @apply w-full h-full flex flex-col justify-start content-center p-14 max-sm:p-4 max-sm:pt-12 max-sm:pb-12;
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
                    & > div {
                        margin-right: 20px;
                    }
                    & > div:last-child {
                        margin-right: 0px;
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
.silver {
    @apply text-[#808080];
}

.black {
    @apply text-black;
}

.pink {
    @apply text-[#F48FB1];
}

.less_obvious_text {
    @apply opacity-60;
}

.small_size_link {
    @apply ml-3 text-base max-sm:text-[9px];
    word-wrap: break-word;
}
.smaller_text {
    font-size: 70%;
}

.the_play_button {
    @apply text-blue-500;
    @apply bg-gradient-to-r from-blue-100 to-blue-50;
    @apply rounded-full;
    @apply p-2;
    @apply max-sm:p-1 max-sm:m-1;
    @apply max-sm:rounded-sm;
    width: 150px;
    margin-bottom: 20px;
}
</style>
