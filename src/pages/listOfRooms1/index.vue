<script lang="ts" setup>
import { reactive, withDefaults, computed } from 'vue'

import store from '../../store'

// type Props = {
//   operationType: OperationType
//   whichToOperateOn: WhichToOperateOn
// }

// const props = withDefaults(defineProps<Props>(), {
//   operationType: OperationType.Add,
//   whichToOperateOn: WhichToOperateOn.LeafNode,
// })

const dict = reactive({
  data: {
  },
  functions: {},
})

</script>

<template>
  <div class="fatherBox1">
    <div class="grid-container">
      <div v-for="item in 100" :key="item" class="box" :style="{
        backgroundColor: store.functions.css.getARandomLightColor()
      }">
        <div class="header">
          <div class="blackTag">Hot</div>
          <div class="roomName">Let's talk</div>
        </div>
        <div class="footer">
          <div class="peopleAvatars">
            <div class="avatar">a</div>
            <div class="avatar">b</div>
            <div class="avatar">c</div>
          </div>
          <div class="peopleNumberCountText">
            {{ item }}人
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fatherBox1 {
  display: flex;
  // height: 110vh;
  width: 100vw;
  background-color: white;

  .grid-container {
    padding: 15px;
    width: 100%;

    display: grid;
    grid-template-columns: auto auto;
    row-gap: 10px;
    column-gap: 10px;

    .box {
      width: 100%;
      height: 100px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      border-radius: 10px;

      .header {
        width: 100%;

        padding-left: 16px;
        margin-top: 10px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .blackTag {
          width: 40px;

          margin-left: -2px;

          display: flex;
          flex-direction: row;
          justify-content: center;

          font-size: 12px;
          color: #ffffff;
          font-weight: bold;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 30px;

          opacity: 0.8;
        }

        .roomName {
          width: 100%;

          margin-top: 5px;

          font-size: 16px;
          color: #ffffff;
          font-weight: bold;
        }
      }

      .footer {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 5px;

        >:first-child {
          margin-left: 4px;
        }

        >:last-child {
          margin-right: 4px;
        }

        .peopleAvatars {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;

          .avatar {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgb(238, 230, 230);

            opacity: 0.8;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .peopleNumberCountText {
          // font-size: 12px;
          font-size: 10px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>