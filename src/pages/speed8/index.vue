<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, ref } from 'vue'

import {
  PlaySquareOutlined,
  TeamOutlined,
  AppstoreOutlined,
  DollarCircleOutlined,
  SketchOutlined,
  ShopFilled,
  GiftFilled,
  TrophyOutlined,
  HeartOutlined,
  UsergroupAddOutlined,
  GitlabOutlined,
  CarOutlined,
  DropboxOutlined,
} from '@ant-design/icons-vue'

import headPicture from '../../assets/head.jpg'
import backgroundPicture from '../../assets/speed8/background.jpg'
import matchIcon from '../../assets/speed8/matchIcon.png'
import battleIcon from '../../assets/speed8/battleIcon.png'
import trainingIcon from '../../assets/speed8/trainingIcon.png'
import bookIcon from '../../assets/speed8/bookIcon.png'
import playgroundIcon from '../../assets/speed8/playgroundIcon.png'

const dict = reactive({
  data: {
  },
  functions: {
  },
})

const fullscreenToggleFunction = () => {
  const element = document.documentElement as any
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element?.mozRequestFullScreen) {
    element?.mozRequestFullScreen()
  } else if (element?.webkitRequestFullscreen) {
    element?.webkitRequestFullscreen()
  } else if (element?.msRequestFullscreen) {
    element?.msRequestFullscreen()
  }
}

const isInLangscape = computed(() => {
  const width = window.innerWidth
  const height = window.innerHeight
  return width > height
})

onMounted(async () => {
  window.onorientationchange = event => {
    window.location.reload()
  }
})
</script>

<template>
  <div
    class="centerDiv">
    <div
      v-if="!isInLangscape"
      :style="{
        fontSize: 'large',
      }">
      Please rotate your screen to see the view!
    </div>
    <div
      v-if="isInLangscape"
      class="absoluteContainer"
      @click="fullscreenToggleFunction">
      <div class="backgoundPage">
        <img
          class="theImg"
          :src="
            backgroundPicture
          ">
      </div>
      <div class="speedPage">
        <div class="topBar">
          <div class="headArea">
            <img class="headImage" :src="headPicture">
            <div class="nameAndLevel">
              <div class="name">
                yingshaoxo
              </div>
              <div class="level">
                Lv.13
              </div>
            </div>
          </div>
          <div class="moneyInfoArea">
            <div class="coinSection">
              <dollar-circle-outlined class="icon" />
              <div class="value">
                5623
              </div>
            </div>
            <div class="coinSection">
              <sketch-outlined class="icon" />
              <div class="value">
                18566
              </div>
            </div>
          </div>
        </div>
        <div class="centerContainer">
          <div class="leftPart">
            <div class="wallButtons">
              <div class="oneButton">
                <div class="icon">
                  <play-square-outlined />
                </div>
                <div class="text">
                  Live Show
                </div>
              </div>
              <div class="oneButton">
                <div class="icon">
                  <team-outlined />
                </div>
                <div class="text">
                  Community
                </div>
              </div>
              <div class="oneButton">
                <div class="icon">
                  <appstore-outlined />
                </div>
                <div class="text">
                  More
                </div>
              </div>
            </div>
            <div class="characterArea">...</div>
          </div>
          <div class="rightPart">
            <div class="circleButtonArea">
              <div class="circleButton">
                <div class="icon">
                  <gift-filled />
                </div>
                <div class="iconText">Events</div>
              </div>
              <div class="circleButton">
                <div class="icon">
                  <shop-filled />
                </div>
                <div class="iconText">Shop</div>
              </div>
            </div>
            <div class="entryButtonArea">
              <div class="row">
                <div class="A">
                  <div class="text">
                    Match
                  </div>
                  <img class="img" :src="matchIcon">
                </div>
                <div class="B">
                  <div class="text">
                    Battle Rooms
                  </div>
                  <img
                    class="img"
                    :src="battleIcon"
                    :style="{
                      // mixBlendMode: 'multiply'
                    }">
                </div>
              </div>
              <div class="row">
                <div class="C">
                  <div class="text">
                    Traning
                  </div>
                  <img class="img" :src="trainingIcon">
                </div>
                <div class="D">
                  <div class="text">
                    Story
                  </div>
                  <img class="img" :src="bookIcon">
                </div>
                <div class="E">
                  <div class="text">
                    Playground
                  </div>
                  <img class="img" :src="playgroundIcon">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottomMenu">
          <div class="oneChoose">
            <div class="icon">
              <trophy-outlined />
            </div>
            <div class="text">
              Achievement
            </div>
          </div>
          <div class="oneChoose">
            <div class="icon">
              <heart-outlined />
            </div>
            <div class="text">
              Couple
            </div>
          </div>
          <div class="oneChoose">
            <div class="icon">
              <usergroup-add-outlined />
            </div>
            <div class="text">
              Team
            </div>
          </div>
          <div class="oneChoose">
            <div class="icon">
              <gitlab-outlined />
            </div>
            <div class="text">
              Pets
            </div>
          </div>
          <div class="oneChoose">
            <div class="icon">
              <car-outlined />
            </div>
            <div class="text">
              Cars
            </div>
          </div>
          <div class="oneChoose">
            <div class="icon">
              <dropbox-outlined />
            </div>
            <div class="text">
              Bag
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
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

.blueGlow {
  text-shadow: 0 0 3px #6babff;
  border-radius: 50%;
}

.blackGlow {
  text-shadow: 0 0 3px #000000;
  border-radius: 50%;
}

.centerDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.absoluteContainer {
  position: relative;
  width: 844px;
  height: 390px;
  max-width: 844px;
  max-height: 390px;
}

.backgoundPage {
  position: absolute;

  width: 100%;
  height: 99%;
}

.theImg {
  // width: 100vw;
  // height: 99vh;
  width: 100%;
  height: 99%;
  object-fit: cover;
  z-index: -1;
}

@topBarHeight: 55px;
@lengthOfOneEntryButton: 100px;

.speedPage {
  position: absolute;
  z-index: 2;

  // width: 100vw;
  // height: 100vh;
  width: 100%;
  height: 100%;

  // background-color: aquamarine;
  overflow-y: scroll;

  .Rows();
  justify-content: flex-start;

  .Unselectable();
  .NotDraggable();

  .topBar {
    width: 100%;
    height: @topBarHeight;

    // background: rgb(2, 0, 36);
    // background: -moz-linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(10, 107, 198, 1) 0%, rgba(0, 205, 255, 1) 100%);
    // background: -webkit-linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(10, 107, 198, 1) 0%, rgba(0, 205, 255, 1) 100%);
    // background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(10, 107, 198, 1) 0%, rgba(0, 205, 255, 1) 100%);
    // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024", endColorstr="#00cdff", GradientType=1);

    box-shadow: rgba(6, 24, 44, 0.1) 0px 0px 0px 6px, rgba(6, 24, 44, 0.65) 0px 1px 4px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    background-color: rgba(21, 114, 245, 0.8);

    // background-color: rgba(0, 0, 0, 0.2);
    // box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 1px 4px -1px, rgba(0, 0, 0, 0.08) 0px 1px 0px inset;

    .Columns();
    justify-content: space-between;

    .headArea {
      // width: 140px;
      height: 100%;

      .Columns();
      justify-content: space-between;

      padding-left: 5px;
      padding-top: 5px;
      padding-bottom: 5px;

      // background-color: rgb(30, 101, 101);

      .headImage {
        width: calc(@topBarHeight * 0.8);
        height: calc(@topBarHeight * 0.8);

        // background-color: chocolate;
        border-radius: 50%;
      }

      .nameAndLevel {
        color: white;
        font-size: large;

        margin-left: 10px;
        margin-right: 10px;
        height: 100%;

        // transform: skew(-2deg, 0deg);

        .Rows();
        justify-content: space-between;
        align-items: flex-start;

        .name {
          margin-top: 7px;
          font-size: large;
          font-style: italic;
        }

        .level {
          margin-bottom: 7px;
          font-size: small;
          // font-style: italic;
        }
      }
    }

    .moneyInfoArea {
      // width: 70%;
      height: 100%;

      // background-color: rgb(210, 201, 30);

      .Columns();
      justify-content: space-between;

      padding-left: 20px;
      padding-right: 20px;

      .coinSection {
        // width: 50px;

        .Columns();

        // background-color: black;

        margin-right: 20px;

        &:last-child {
          margin-right: 0px;
        }

        .icon {
          font-size: x-large;
          margin-right: 10px;

          color: white;

          .blueGlow();
        }

        .value {
          font-size: large;

          color: white;

          font-weight: bold;
        }
      }
    }
  }

  .centerContainer {
    width: 100%;
    height: 100%;

    background-color: transparent;

    .Columns();
    justify-content: space-between;

    .leftPart {
      width: 50%;
      height: 100%;

      background-color: transparent;

      .Columns();
      justify-content: flex-start;

      .wallButtons {
        width: 70px;
        height: 100%;

        // background-color: rgb(86, 184, 241);

        .Rows();
        justify-content: flex-start;

        >div {
          margin-bottom: 30px;
          font-size: small;

          &:first-child {
            margin-top: 30px;
          }
        }

        .oneButton {
          box-shadow: rgba(6, 24, 44, 0.01) 0px 0px 0px 4px, rgba(6, 24, 44, 0.65) 0px 1px 2px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
          // .yellowBoxGlow();

          .Rows();

          .icon {
            font-size: x-large;
            color: rgb(33, 187, 248);
          }

          .text {
            font-size: x-small;
            font-weight: bold;
            color: skyblue;
          }
        }
      }

      .characterArea {
        width: 100%;
        height: 100%;

        .Rows();
        .Columns();

        // background-color: lemonchiffon;
      }
    }

    .rightPart {
      width: 50%;
      height: 100%;
      // background-color: darkorchid;

      .Rows();
      // justify-content: center;
      // align-items: center;

      .circleButtonArea {
        width: calc(@lengthOfOneEntryButton * 3);

        // transform: skew(-8deg, 0deg);
        // margin-left: 10%;

        .Columns();
        justify-content: flex-end !important;

        height: 50px;
        // background-color: azure;

        margin-bottom: 10px;

        .Columns();

        .circleButton {
          .Rows();
          justify-content: flex-start;

          margin-right: 10px;

          &:last-child {
            margin-right: 0px;
          }

          // background-color: skyblue;
          .icon {
            width: 30px;
            height: 30px;
            background-color: rgba(30, 32, 32, 0.2);

            .Rows();
            color: rgb(246, 255, 0);

            font-size: larger;

            border-radius: 50%;
          }

          .iconText {
            // font-weight: bold;
            color: white;
            .blueGlow();
          }
        }
      }

      .entryButtonArea {
        width: calc(@lengthOfOneEntryButton * 3);

        .Rows();
        justify-content: center;
        align-items: center;

        // background-color: greenyellow;
        background-color: rgba(6, 24, 44, 0.65);
        transform: skew(-8deg, 0deg);

        box-shadow: rgba(6, 24, 44, 0.25) 0px 0px 0px 8px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

        > :first-child {
          margin-bottom: 5px;
          // margin-left: 10%;
        }

        .row {
          .Columns();
          width: 100%;
          justify-content: space-between;

          color: yellow;
          font-size: medium;

          >div {
            // transform: skew(-8deg, 0deg);

            .Rows();
            justify-content: flex-start;
            align-items: center;

            margin-right: 10px;

            &:last-child {
              margin-right: 0px;
            }

            .text {
              padding-left: 10px;
              width: 100%;
              text-align: start;
              color: white;
              font-weight: bold;
              font-size: large;

              .blackGlow();
            }

            .img {
              margin-top: 10px;
              width: 60%;
              height: 60%;
            }
          }

          .A {
            width: @lengthOfOneEntryButton;
            height: @lengthOfOneEntryButton;

            background-color: rgb(56, 170, 235);
          }

          .B {
            width: calc(@lengthOfOneEntryButton * 2);
            height: @lengthOfOneEntryButton;

            background-color: rgb(241, 203, 64);
          }

          .C {
            width: @lengthOfOneEntryButton;
            height: @lengthOfOneEntryButton;

            background-color: rgb(115, 228, 115);
          }

          .D {
            width: @lengthOfOneEntryButton;
            height: @lengthOfOneEntryButton;

            background-color: rgb(85, 139, 225);
          }

          .E {
            width: @lengthOfOneEntryButton;
            height: @lengthOfOneEntryButton;

            background-color: rgb(213, 94, 186);
          }
        }
      }
    }
  }

  .bottomMenu {
    width: 100%;
    height: 60px;
    // background-color: darkcyan;

    color: white;
    font-weight: bold;

    // background: rgb(2, 0, 36);
    // background: -moz-linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(10, 107, 198, 1) 0%, rgba(0, 205, 255, 1) 100%);
    // background: -webkit-linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(10, 107, 198, 1) 0%, rgba(0, 205, 255, 1) 100%);
    // background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(10, 107, 198, 1) 0%, rgba(0, 205, 255, 1) 100%);
    // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024", endColorstr="#00cdff", GradientType=1);

    box-shadow: rgba(6, 24, 44, 0.1) 0px 0px 0px 6px, rgba(6, 24, 44, 0.65) 0px 1px 4px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    background-color: rgba(0, 0, 0, 0.7);

    .Columns();
    justify-content: space-between;

    .oneChoose {
      &:first-child {
        margin-left: 20px;
      }

      &:last-child {
        margin-right: 20px;
      }

      .Rows();
      justify-content: center !important;
      align-items: center !important;

      .icon {
        font-size: medium;
      }

      .text {
        font-size: small;
      }
    }
  }
}
</style>