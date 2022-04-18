<script lang="ts" setup>
import { reactive } from 'vue'

const dict = reactive({
  data: {
  },
  functions: {},
})

</script>

<template>
  <div class="box">
    Hi there!
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
}
</style>