<script lang="ts" setup>
import { reactive } from 'vue'
import store from './store'

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
      <button
        v-for="(room, index) in Object.values(store.variables.routesMap).slice(1)"
        :key="index"
        @click="
          () =>
          { store.functions.pages.switchPage(room) }">
        {{
          index + 1
        }}. {{
          room?.split('/')[1]
        }}
      </button>
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
    min-width: 60%;
    max-height: 70%;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;

    border: 1px solid rgba(255,0,0, 0.2);
    margin-top: 30px;

    padding-top: 20px;

    button {
      margin-bottom: 25px;
      width: 150px;
      min-height: 35px;
      color: cornflowerblue;
      background-color: rgba(0,0,0,0.05);
      border: 0ch;
    }
  }
}
</style>