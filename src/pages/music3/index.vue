<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch } from 'vue'

import { PlayCircleFilled, PauseCircleFilled, SoundFilled } from '@ant-design/icons-vue'

import store from '../../store'

import theSong from '../../assets/music3/浪.mp3'
import LyricsComponent from './lyrics.vue'

const audioProgressController = reactive({
  audio: new Audio(theSong),
  pointerReference: null as HTMLElement | null,
  backgroundBarReference: null as HTMLElement | null,
  backgroundBarProgressReference: null as HTMLElement | null,
  tempData: {
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
  },
  data: {
    fakeAudioProgress: 0,
    audioProgress: 0,
    audioDuration: 0,
    audioCurrentTime: 0,
    audioIsPlaying: false,
  },
  functions: {
    init: () => {
      if (audioProgressController.pointerReference && audioProgressController.backgroundBarReference && audioProgressController.backgroundBarProgressReference) {

        const closeDragElement = () => {
          document.onmouseup = null;
          document.onmousemove = null;

          audioProgressController.functions.setAudioProgress(audioProgressController.data.audioProgress)
          audioProgressController.functions.play()
        }

        const elementDrag = (e: MouseEvent) => {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          audioProgressController.tempData.pos1 = audioProgressController.tempData.pos3 - e.clientX;
          audioProgressController.tempData.pos2 = audioProgressController.tempData.pos4 - e.clientY;
          audioProgressController.tempData.pos3 = e.clientX;
          audioProgressController.tempData.pos4 = e.clientY;
          // set the element's new position:
          const element = audioProgressController.pointerReference as HTMLElement
          if (element) {
            // element.style.top = (element.offsetTop - audioProgressController.tempData.pos2) + "px";
            const newLeft = Number(element.offsetLeft - audioProgressController.tempData.pos1);
            const pointWidth = Number(audioProgressController.pointerReference?.offsetWidth);
            const containerLeft = Number(audioProgressController.backgroundBarReference?.offsetLeft)
            const containerWidth = Number(audioProgressController.backgroundBarReference?.offsetWidth)
            if ((newLeft + (pointWidth / 6) > containerLeft) && (((newLeft + pointWidth) - (pointWidth / 6)) < (containerLeft + containerWidth))) {
              element.style.left = String(newLeft) + "px"
              audioProgressController.functions.updateProgressData((newLeft / containerWidth) * 100)
            }
          }
        }

        const dragMouseDown = (e: MouseEvent) => {
          audioProgressController.functions.pause()

          e = e || window.event;
          e.preventDefault()
          // get the mouse cursor position at startup:
          audioProgressController.tempData.pos3 = e.clientX;
          audioProgressController.tempData.pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        audioProgressController.pointerReference.onmousedown = dragMouseDown
        audioProgressController.backgroundBarReference.onclick = (e: MouseEvent) => {
          if (audioProgressController.backgroundBarReference) {
            const progress = e.offsetX / audioProgressController.backgroundBarReference?.offsetWidth
            audioProgressController.functions.updateProgressData(progress * 100, true)

            audioProgressController.functions.setAudioProgress(audioProgressController.data.audioProgress)
            // console.log(progress * 100)
          }
        }
        audioProgressController.backgroundBarProgressReference.onclick = (e: MouseEvent) => {
          if (audioProgressController.backgroundBarReference) {
            const progress = e.offsetX / audioProgressController.backgroundBarReference?.offsetWidth
            audioProgressController.functions.updateProgressData(progress * 100, true)

            audioProgressController.functions.setAudioProgress(audioProgressController.data.audioProgress)
            // console.log(progress * 100)
          }
        }

        audioProgressController.functions.updateProgressData(0, true)
      }
    },
    updateProgressData: (newProgress: number, alsoUpdatePointer: boolean = false) => {
      audioProgressController.data.audioProgress = newProgress

      audioProgressController.data.fakeAudioProgress = newProgress + 1.7

      if (alsoUpdatePointer) {
        const pointerElement = audioProgressController.pointerReference
        if (pointerElement && audioProgressController.backgroundBarReference) {
          let newLeft = audioProgressController.backgroundBarReference.offsetWidth * (newProgress / 100)
          newLeft = newLeft - (pointerElement.offsetWidth / 2)
          if (newProgress <= 10) {
            newLeft = newLeft + 10
          }
          pointerElement.style.left = String(newLeft) + 'px'
        }
      }
    },
    playOrPause: () => {
      if (audioProgressController.data.audioIsPlaying) {
        audioProgressController.data.audioIsPlaying = false
        audioProgressController.audio.pause()
      } else {
        audioProgressController.data.audioIsPlaying = true
        audioProgressController.audio.play()
      }
    },
    pause: () => {
      audioProgressController.data.audioIsPlaying = false
      audioProgressController.audio.pause()
    },
    setAudioProgress: (progress: number) => {
      progress = progress / 100

      const audio = audioProgressController.audio
      let duration = audio.duration;
      audio.currentTime = duration * progress;
    },
    play: () => {
      audioProgressController.data.audioIsPlaying = true
      audioProgressController.audio.play()
    },
  },
})

const audioVolumnController = reactive({
  refrences: {
    audioVolumnBackground: null as HTMLElement | null,
    audioVolumnPointer: null as HTMLElement | null,
    // audioVolumnProgress: null as HTMLElement | null,
  },
  data: {
    progress: 0,
  },
  functions: {
    init: () => {
      if (!(audioVolumnController.refrences.audioVolumnBackground &&
        audioVolumnController.refrences.audioVolumnPointer
      )) {
        return
      }

      const updateProgressData = (newProgress: number, alsoUpdatePointer: boolean = false) => {
        audioVolumnController.data.progress = newProgress

        const pointerElement = audioVolumnController.refrences.audioVolumnPointer
        const background = audioVolumnController.refrences.audioVolumnBackground
        if (pointerElement && background) {
          let newLeft = background.offsetWidth * (newProgress / 100)
          newLeft = newLeft - (pointerElement.offsetWidth / 2)
          if (newProgress < 8) {
            newLeft = newLeft + 7
          }
          pointerElement.style.left = String(newLeft) + 'px'
        }
      }

      audioVolumnController.refrences.audioVolumnBackground.onclick = (e: MouseEvent) => {
        const background = audioVolumnController.refrences.audioVolumnBackground
        if (background) {
          const progress = e.offsetX / background?.offsetWidth
          updateProgressData(progress * 100, true)
          // console.log(progress * 100)
        }
      }

      updateProgressData(45, true)
    }
  }
})

const dict = reactive({
  references: {
    selection: null as HTMLSelectElement | null,
  },
  data: {
  },
  functions: {},
})

watch(
  () => audioVolumnController.data.progress,
  (_newValue, _oldValue) => {
    if (audioProgressController.audio) {
      audioProgressController.audio.volume = _newValue / 100
    }
  },
  {
    deep: true,
  }
);

const onSelectionChange = () => {
  if (dict.references.selection) {
    const selected = dict.references.selection.value
    if (audioProgressController.audio) {
      audioProgressController.audio.playbackRate = Number(selected)
    }
  }
}

const audioTimeNumberToString = (time: number | null) => {
  if (!time) {
    return '00:00'
  }
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

onMounted(() => {
  audioProgressController.functions.init()
  audioVolumnController.functions.init()

  audioProgressController.audio.ontimeupdate = () => {
    const audio = audioProgressController.audio
    let currentTime = audio.currentTime;
    let duration = audio.duration;
    audioProgressController.functions.updateProgressData((currentTime / duration) * 100, true)
  }

  window.onresize = () => {
    audioProgressController.functions.init()
    audioVolumnController.functions.init()
  }
})
</script>

<template>
  <div class="papa">
    <div class="playBar">
      <div class="left">
        <div class="playIcon" @click="audioProgressController.functions.playOrPause">
          <PlayCircleFilled v-if="!audioProgressController.data.audioIsPlaying" />
          <pause-circle-filled v-if="audioProgressController.data.audioIsPlaying" />
        </div>
        <div class="progressBar">
          <div :ref="(ref: any) => audioProgressController.backgroundBarReference = ref" class="progressBarBackground">
          </div>
          <div :ref="(ref: any) => audioProgressController.pointerReference = ref" class="progressBarPoint" :style="{
          }"></div>
          <div :ref="(ref: any) => audioProgressController.backgroundBarProgressReference = ref"
            class="progressBarProgress" :style="{
              width: `${audioProgressController.data.fakeAudioProgress}%`
            }"></div>
        </div>
        <div class="timeTextLabel">
          {{
              audioTimeNumberToString(audioProgressController.audio.currentTime) + " / " +
              audioTimeNumberToString(audioProgressController.audio.duration)
          }}
        </div>
      </div>
      <div class="right">
        <div class="speakerIcon">
          <SoundFilled></SoundFilled>
        </div>
        <div class="volumeBar">
          <progress :ref="(ref: any) => audioVolumnController.refrences.audioVolumnBackground = ref"
            class="volumeBarBackground" :value="audioVolumnController.data.progress" max="100"></progress>
          <!-- <div :ref="(ref) => audioVolumnController.refrences.audioVolumnBackground = ref" class="volumeBarBackground">
          </div> -->
          <div :ref="(ref: any) => audioVolumnController.refrences.audioVolumnPointer = ref" class="volumeBarPoint">
          </div>
          <!-- <div :ref="(ref) => audioVolumnController.refrences.audioVolumnProgress = ref" class="volumeBarProgress">
          </div> -->
        </div>
        <div class="speedSelection">
          <select :ref="(ref: any) => dict.references.selection = ref" :onchange="onSelectionChange">
            <option value="1.0">1.0 speed</option>
            <option value="1.2">1.2 skeed</option>
            <option value="1.5">1.5 speed</option>
            <option value="2.0">2.0 speed</option>
            <option value="3.0">3.0 speed</option>
          </select>
        </div>
      </div>
    </div>
    <LyricsComponent class="lyricsBox"></LyricsComponent>
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
  justify-content: flex-start;
  align-items: center;
}

@progressBarHeight: 23px;
@progressBarBackgroundColor: #ccc;
@progressBarPointColor: #9098ae;
@progressBarProgressColor: #a4b4df;

@volumnBarBackgroundColor: #7F8080;
@volumnBarProgressColor: #e7927f;

.papa {
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100vh;
  }

  // background: #ffff;
  background-color: rgb(222, 222, 242);

  // .Row();
  // text-align: center;
  // justify-content: center;
  // font-size: xx-large;
  // color: #e7927f;

  .playBar {
    height: 80px;

    background-color: white;

    .Row();

    @media (max-width: 768px) {
      .Column();
      height: 20vh;

      padding-top: 10px;
      padding-bottom: 10px;

      padding-left: 20px;
      padding-right: 20px;
    }

    .left {
      width: 70%;
      height: 100%;

      padding-left: 20px;
      padding-right: 20px;

      @media (max-width: 768px) {
        width: 100%;

        // margin-top: 10px;
        // margin-bottom: 20px;

        padding-left: 0px;
        padding-right: 0px;
      }

      .Row();

      // background-color: red;

      .playIcon {
        font-size: @progressBarHeight * 2;

        @media (max-width: 768px) {
          width: min-content;
        }
      }

      .progressBar {
        width: 100%;

        margin-left: 20px;
        margin-right: 16px;

        @media (max-width: 768px) {
          width: 90%;

          margin-left: 20px;
          margin-right: 12px;
        }

        .Row();
        position: relative;

        .progressBarBackground {
          position: absolute;

          width: 100%;
          height: @progressBarHeight;
          background-color: @progressBarBackgroundColor;

          border-radius: 20px;
        }

        .progressBarPoint {
          position: absolute;

          left: 25%;

          height: @progressBarHeight * 1.35;
          width: @progressBarHeight * 1.35;
          background-color: @progressBarPointColor;

          border-radius: 20px;

          z-index: 2;

          &:hover {
            height: @progressBarHeight * 1.35 * 1.1;
            width: @progressBarHeight * 1.35 * 1.1;
          }
        }

        .progressBarProgress {
          position: absolute;

          height: @progressBarHeight;
          width: 30%;
          background-color: @progressBarProgressColor;

          border-radius: 20px;
        }
      }

      .timeTextLabel {
        .Row();
        justify-content: center;

        width: 200px;

        font-family: -apple-system, SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, San Francisco, Arial, PingFang SC, Microsoft Yahei, STHeiti, Microsoft JhengHei, SimSun, sans-serif;
        font-size: 16px;
        color: #999;
        margin: auto;

        @media (max-width: 768px) {
          // font-family: 'Courier New', Courier, monospace;
          height: 100%;
          font-size: 10px;
          // width: auto;
          // min-width: 60px;
          width: 90px;
          right: auto;
          bottom: auto;
          top: auto;
          padding: auto;

          display: flex;
          justify-content: flex-end;
        }
      }
    }

    .right {
      width: 35%;
      height: 100%;

      .Row();
      padding-left: 20px;
      padding-right: 20px;

      @media (max-width: 768px) {
        width: 100%;

        // padding-left: 20px;
        // padding-right: 10px;
        padding-left: 0px;
        padding-right: 0px;
      }


      .speakerIcon {
        font-size: @progressBarHeight * 1.2;
        // color: #B1B7CB;
        color: #717587;

        @media (max-width: 768px) {
          margin-left: 5px;
          font-size: @progressBarHeight * 2;
        }
      }

      .volumeBar {
        width: 100%;

        margin-left: 8px;
        margin-right: 16px;

        @media (max-width: 768px) {
          width: 90%;

          margin-left: 18px;
          margin-right: 20px;
        }

        .Row();
        position: relative;

        .volumeBarBackground {
          position: absolute;

          width: 100%;
          height: @progressBarHeight * 0.3;
          background-color: @volumnBarBackgroundColor;
          // background-color: wheat;

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

        .volumeBarPoint {
          position: absolute;

          left: 20%;
          height: @progressBarHeight * 0.9;
          width: @progressBarHeight * 0.9;
          background-color: @progressBarPointColor;

          border-radius: 20px;

          z-index: 2;

          &:hover {
            height: @progressBarHeight * 0.9 * 1.1;
            width: @progressBarHeight * 0.9 * 1.1;
          }
        }

        .volumeBarProgress {
          position: absolute;

          height: @progressBarHeight * 0.3;
          width: 30%;
          background-color: @volumnBarProgressColor;

          border-radius: 20px;
        }
      }
    }

    .speedSelection {
      @media (max-width: 768px) {
        width: 60px;

        display: flex;
        justify-content: flex-end;
      }

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

        @media (max-width: 768px) {
          width: 90px;
          font-size: 9px;
        }
      }
    }
  }

  .lyricsBox {
    height: calc(100% - 150px);

    padding-top: 50px;
    padding-bottom: 20px;

    text-align: center;
    overflow: scroll;

    font-size: large;
    color: rgba(0, 0, 0, 0.85);

    @media (max-width: 768px) {
      height: 70vh;

      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>