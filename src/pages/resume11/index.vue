<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, ref, onActivated, onDeactivated } from 'vue'

import store from '../../store'

import { useStorage } from '@vueuse/core'

const dict = reactive({
  tempData: {
  },
  data: {
  },
  functions: {
  },
})

const language = useStorage('language', 'en')

onMounted(async () => {
})

// onDeactivated(async () => {
//   document.removeEventListener('keydown', keydownListener)
// })
</script>

<template>
  <div class="w-screen h-screen">
    <div class="container_">
      <div class="title_">
        In Dev ...
        <!-- YingJie Hu -->
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../tailwind.css';

.container_ {
  @apply w-full h-full flex flex-col justify-start content-center;
}

.title_ {
  @apply text-center mt-10 text-sky-400 text-3xl;

}
</style>