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
    <div class="
      w-full h-full 
      flex flex-col justify-center content-center	
    ">
      <div class="text-center">
        In Dev ...
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../tailwind.css';

</style>