<script lang="ts" setup>
import { reactive, withDefaults, computed } from 'vue'

import { PlayCircleFilled, SoundFilled } from '@ant-design/icons-vue'

import store from '../../store'

const dict = reactive({
  data: {
  },
  functions: {},
})
</script>

<template>
  <div class="papa">
    <div class="playBar">
      <div class="left">
        <div class="playCircleIcon">
          <play-circle-filled />
        </div>
        <div class="progressBar">
          <div class="backgroundBar"></div>
          <div class="progressPoint"></div>
        </div>
        <div class="progressTimeLabel">00:00 / 07:02</div>
      </div>

      <div class="right">

        <div class="volumnController">
          <div class="speakerIcon">
            <sound-filled />
          </div>
          <div class="audioProgressBar">
            <progress class="audioProgressBackground" value="30" max="100"></progress>
            <!-- <div class="audioProgressBackground"></div> -->
            <div class="audioProgressPoint"></div>
          </div>
        </div>

        <div class="speedSelection">
          <select name="speed">
            <option value="1">1 speed</option>
            <option value="1.5">1.5 speed</option>
            <option value="2">2 speed</option>
            <option value="3">3 speed</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.Column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

@progressBarHeight: 23px;

.papa {
  width: 100vw;
  height: 100vh;
  background-color: #DEDEF2;
  // background: #ffff;

  .playBar {
    height: 80px;

    background-color: white;
    // background-color: transparent;

    .Row();

    .left {
      width: 70%;
      height: 100%;

      padding-left: 20px;
      padding-right: 20px;

      .Row();

      // background-color: red;

      .playCircleIcon {
        font-size: @progressBarHeight * 2;
      }

      .progressBar {
        width: 100%;

        margin-left: 8px;
        margin-right: 16px;

        .Row();
        position: relative;

        .backgroundBar {
          position: absolute;

          width: 100%;
          height: @progressBarHeight;
          background-color: #ccc;

          border-radius: 20px;
        }

        .progressPoint {
          position: absolute;

          height: @progressBarHeight * 1.3;
          width: @progressBarHeight * 1.3;
          background-color: #9098ae;

          border-radius: 20px;
        }
      }

      .progressTimeLabel {
        .Row();
        justify-content: center;

        width: 200px;

        text-align: center;

        font-family: -apple-system, SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, San Francisco, Arial, PingFang SC, Microsoft Yahei, STHeiti, Microsoft JhengHei, SimSun, sans-serif;
        text-align: left;
        padding: 0;
        border: 0;
        font-size: 16px;
        top: 0;
        right: 0;
        bottom: 0;
        color: #999;
        margin: auto;
      }
    }

    .right {
      width: 35%;
      height: 100%;

      // background-color: blue;

      .Row();
      padding-left: 20px;
      padding-right: 20px;

      .volumnController {
        width: 100%;
        .Row();

        .speakerIcon {
          font-size: @progressBarHeight * 1.2;
          color: #717587;
        }

        .audioProgressBar {
          width: 100%;

          margin-left: 8px;
          margin-right: 16px;

          .Row();
          position: relative;

          .audioProgressBackground {
            position: absolute;

            width: 100%;
            height: @progressBarHeight * 0.3;
            background-color: rgb(255, 255, 255);

            border-radius: 20px;
          }

          progress::-moz-progress-bar {
            background: #e7927f;
          }

          progress::-webkit-progress-value {
            background: #e7927f;
          }

          progress {
            background: #e7927f;
          }

          .audioProgressPoint {
            position: absolute;

            left: 20%;
            height: @progressBarHeight * 0.9;
            width: @progressBarHeight * 0.9;
            background-color: #b1b7ca;

            border-radius: 20px;
          }

        }
      }

      .speedSelection {
        select {
          border-width: 0.1px;
          border-color: #b1b7ca;

          font-family: -apple-system,
            SF Pro Text,
            SF Pro Icons,
            Helvetica Neue,
            Helvetica,
            San Francisco,
            Arial,
            PingFang SC,
            Microsoft Yahei,
            STHeiti,
            Microsoft JhengHei,
            SimSun,
            sans-serif;
          cursor: pointer;
          font-size: 12px;
          // text-align: center;
          color: #858999;
          margin: 0;
          padding: 0;
          // background-size: 100% 100%;
          width: max-content;
          height: 22px;
          line-height: 22px;
        }
      }
    }
  }

}
</style>