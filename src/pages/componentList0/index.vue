<script lang="ts" setup>
import { reactive } from 'vue'
import store from '../../store'

const dict = reactive({
  data: {
  },
  functions: {},
})

</script>

<template>
  <div class="box">
    <div>
      Hi there!
    </div>
    <div class="rooms">
      <button @click="() => { store.functions.pages.switchPage(store.variables.routesMap.listOfRooms) }">1. list of
        rooms</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  .rooms {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      margin: 20px;
    }
  }
}
</style>