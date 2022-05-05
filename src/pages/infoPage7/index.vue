<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, ref } from 'vue'

import {
  ArrowLeftOutlined,
  MoreOutlined,
} from '@ant-design/icons-vue'

const dict = reactive({
  references: {
  },
  data: {
  },
  functions: {
  },
})

onMounted(async () => {
})
</script>

<template>
  <div class="InfoPage">
    <!-- <div class="yingshao_xo">Made by yingshaoxo</div> -->
    <div class="topBar">
      <div class="leftArrow">
        <arrow-left-outlined />
      </div>
      <div class="rightMenu">
        <more-outlined />
      </div>  
    </div>

    <div class="infoContainer">
      <div class="headCard">
        <div class="userName">yingshaoxo</div>
        <div class="followAndFansInfoRow">
          <div>8 follow</div>
          <div>9 fans</div>
        </div>
        <div class="info_bubbles">
          <div>born in 1998</div>
          <div>unchooseable china</div>
          <div>5 years old</div>
        </div>
      </div>
      <div class="tabs">
        <div class="tabContainer">
          <div class="homePage" />
          <div class="sayingPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@joystick-length: 120px;

.Rows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Columns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.Unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.NotDraggable {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.InfoPage {
  width: 100%;
  height: 100vh;

  // padding-left: 20px;
  // padding-right: 20px;

  background-color: aquamarine;
  // overflow: hidden !important;

  .Rows();
  justify-content: flex-start;

  .Unselectable();
  .NotDraggable();

  .topBar {
    width: 100%;

    .Columns();

    justify-content: space-between;
  }

  .infoContainer {
    width: 100%;
    // height: 80%;

    background-color: burlywood;

    .Rows();

    justify-content: flex-start;
    align-items: center;

    .headCard {
      width: 100%;
      min-height: 250px;

      background-color: rgb(255, 228, 196);
      // opacity: 0.5;

      .userName {
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: rgb(0, 0, 0);
      }

      .followAndFansInfoRow {
        width: 100%;
        // height: 50px;

        .Columns();

        justify-content: space-around;
        align-items: center;

      }

      .info_bubbles {
        width: 100%;
        // height: 100%;

        .Columns();

        justify-content: space-around;
        align-items: center;
      }
    }

    .tabs {
      width: 100%;
      // height: 100%;

      .Columns();

      justify-content: space-between;
      align-items: center;

      .tabContainer {
        width: 100%;
        // height: 100%;

        .Rows();

        justify-content: flex-start;
        align-items: center;

        .homePage {
          width: 100%;
          // height: 100%;

          background-color: rgb(255, 228, 196);
          // opacity: 0.5;
        }

        .sayingPage {
          width: 100%;
          // height: 100%;

          background-color: rgb(255, 228, 196);
          // opacity: 0.5;
        }
      }
    }
  }
}

.yingshao_xo {
  color: white;
  visibility: hidden;
}
</style>