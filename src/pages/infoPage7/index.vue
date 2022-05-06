<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, ref } from 'vue'

import {
  ArrowLeftOutlined,
  MoreOutlined,
  RetweetOutlined,
  MessageOutlined,
  LikeOutlined,
} from '@ant-design/icons-vue'

import headPicture from '../../assets/head.jpg'

enum tabMap {
  home = 1,
  saying = 2,
}

const dict = reactive({
  references: {
  },
  data: {
    activeTab: tabMap.home,
  },
  functions: {
  },
})

onMounted(async () => {
})
</script>

<template>
  <div
    class="InfoPage"
    :class="{
      'homeBackground': dict.data.activeTab === tabMap.home,
      'sayingBackground': dict.data.activeTab === tabMap.saying,
    }">
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
        <div class="headContainer">
          <img class="realHeadPicture" :src="headPicture">
        </div>
        <div class="userName">yingshaoxo</div>
        <div class="followAndFansInfoRow">
          <div>8 Following</div>
          <div>|</div>
          <div>9 Follwer</div>
        </div>
        <div class="info_bubbles">
          <div>Born in 1998</div>
          <div>Unchoosable China</div>
          <div>5 years old</div>
        </div>
      </div>
      <div class="tabs">
        <div class="tabHeader">
          <div
            :class="{
              'tabSelected': dict.data.activeTab === tabMap.home,
              'tabUnselected': dict.data.activeTab !== tabMap.home
            }"
            @click="dict.data.activeTab = tabMap.home">
            Home
          </div>
          <div
            :class="{
              'tabSelected': dict.data.activeTab === tabMap.saying,
              'tabUnselected': dict.data.activeTab !== tabMap.saying
            }"
            @click="dict.data.activeTab = tabMap.saying">
            Saying
          </div>
        </div>
        <div class="tabContainer">
          <div v-if="dict.data.activeTab == tabMap.home" class="homePage">
            <div class="card">
              <div class="cardTitle">Favorite</div>
              <div class="cardContent">How to be better at something.<br><br>I'm a working machine.</div>
            </div>
            <div class="card">
              <div class="cardTitle">Song List</div>
              <div class="cardContent">
                <div class="theSongGroupList">
                  <div class="songRow">
                    <div class="picture" />
                    <div class="songName">
                      Alan Walker
                    </div>
                  </div>
                  <div class="songRow">
                    <div class="picture" />
                    <div class="songName">
                      The Fat Rat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="dict.data.activeTab == tabMap.saying" class="sayingPage">
            <div class="oneRowOfSaying">
              <div class="headAndNameAndTime">
                <img class="head" :src="headPicture">
                <div class="nameAndTime">
                  <div class="name">yingshaoxo</div>
                  <div class="time">2019/12/19</div>
                </div>
              </div>
              <div class="sayingContent">
                You never be better unless you tried your best.
              </div>
              <div class="sayingReactionBar">
                <div class="forward">
                  <retweet-outlined />
                  <div class="iconText">Forward</div>
                </div>
                <div class="comment">
                  <message-outlined />
                  <div class="iconText">Comments</div>
                </div>
                <div class="like">
                  <like-outlined />
                  <div class="iconText">2</div>
                </div>
              </div>
            </div>

            <div class="oneRowOfSaying">
              <div class="headAndNameAndTime">
                <img class="head" :src="headPicture">
                <div class="nameAndTime">
                  <div class="name">yingshaoxo</div>
                  <div class="time">2019/12/19</div>
                </div>
              </div>
              <div class="sayingContent">
                You can only get stronger.
              </div>
              <div class="sayingReactionBar">
                <div class="forward">
                  <retweet-outlined />
                  <div class="iconText">Forward</div>
                </div>
                <div class="comment">
                  <message-outlined />
                  <div class="iconText">Comments</div>
                </div>
                <div class="like">
                  <like-outlined />
                  <div class="iconText">2</div>
                </div>
              </div>
            </div>

            <div class="oneRowOfSaying">
              <div class="headAndNameAndTime">
                <img class="head" :src="headPicture">
                <div class="nameAndTime">
                  <div class="name">yingshaoxo</div>
                  <div class="time">2019/12/19</div>
                </div>
              </div>
              <div class="sayingContent">
                There has no way back!
              </div>
              <div class="sayingReactionBar">
                <div class="forward">
                  <retweet-outlined />
                  <div class="iconText">Forward</div>
                </div>
                <div class="comment">
                  <message-outlined />
                  <div class="iconText">Comments</div>
                </div>
                <div class="like">
                  <like-outlined />
                  <div class="iconText">2</div>
                </div>
              </div>
            </div>
          </div>
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

@paddingWidth: 20px;
@backgroundColor: #F5F5F5;
@cardColor: white;

.homeBackground {
  background-color: @backgroundColor;
}

.sayingBackground {
  background-color: white;
}

.InfoPage {
  width: 100vw;
  height: 100vh;

  // background-color: aquamarine;

  overflow-y: scroll;

  .Rows();
  justify-content: flex-start;

  .Unselectable();
  .NotDraggable();

  .topBar {
    width: 100%;

    .Columns();

    justify-content: space-between;

    font-size: x-large;

    .leftArrow {
      margin: @paddingWidth;
    }

    .rightMenu {
      margin: @paddingWidth;
    }
  }

  .infoContainer {
    width: calc(100% - (@paddingWidth*2));
    // height: 80%;

    margin-top: 140px;

    .Rows();

    justify-content: flex-start;
    align-items: center;

    .headCard {
      width: 100%;
      min-height: 200px;

      background-color: @cardColor;
      // opacity: 0.5;

      border-radius: 20px;

      .headContainer {
        position: relative;

        width: 100%;
        height: 20px;

        .Rows();
        justify-content: center;

        .realHeadPicture {
          position: absolute;

          top: -55px;

          .Rows();
          justify-content: center;

          height: 100px;
          width: 100px;
          background-color: rgba(255, 255, 255, 0.8);

          border-radius: 50%;
        }
      }

      .userName {
        margin-top: 40px;

        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.8);
      }

      .followAndFansInfoRow {
        width: 100%;
        // height: 50px;

        margin-top: 15px;

        .Columns();

        justify-content: center;
        align-items: center;

        >div {
          color: rgb(153, 149, 149);
          font-size: small;
        }

        >div:first-child {
          margin-left: 0px;
          margin-right: 10px;
        }

        >div:last-child {
          margin-left: 10px;
          margin-right: 0px;
        }
      }

      .info_bubbles {
        width: 100%;
        // height: 100%;

        margin-top: 15px;

        .Columns();

        justify-content: center;
        align-items: center;

        >div {
          background-color: white;
          font-size: small;

          padding: 5px;

          border-radius: 10px;
          border-color: hsl(0, 0%, 94%);
          border-width: 1px;
          border-style: solid;

          margin: 8px;
          margin-top: 0px;
          margin-bottom: 0px;
        }
      }
    }

    .tabs {
      width: 100%;
      // height: 50px;

      margin-top: 20px;

      border-radius: 20px;

      .Rows();

      justify-content: center;
      align-items: center;

      .tabHeader {
        width: 100%;

        .Columns();
        justify-content: center;
        align-items: center;

        >div {
          font-size: medium;

          margin: 20px;
        }
      }

      .tabContainer {
        width: 100%;
        // height: 100%;

        margin-top: 20px;
        margin-bottom: 20px;

        .Rows();

        justify-content: flex-start;
        align-items: center;

        .homePage {
          width: 100%;
          // height: 100%;

          .card {
            background-color: @cardColor;
            min-height: 120px;

            border-radius: 20px;

            margin-bottom: 20px;

            &:last-child {
              margin-bottom: 0px;
            }

            padding: 20px;

            .cardTitle {
              font-size: large;
              font-weight: bold;
            }

            .cardContent {
              margin-top: 20px;

              font-size: small;

              .theSongGroupList {
                .Rows();

                .songRow {
                  width: 100%;
                  margin-bottom: 10px;

                  .Columns();
                  justify-content: flex-start;

                  .picture {
                    width: 50px;
                    height: 50px;
                    background-color: rgba(255, 0, 0, 0.6);

                    border-radius: 5px;
                  }

                  .songName {
                    margin-left: 10px;
                  }
                }
              }
            }
          }
        }

        .sayingPage {
          width: 100%;

          @headLength: 50px;

          .oneRowOfSaying {
            padding: 10px;
            padding-top: 15px;
            padding-bottom: 15px;

            margin-bottom: 20px;

            background-color: @cardColor;

            border-radius: 20px;

            .headAndNameAndTime {
              width: 100%;

              .Columns();
              justify-content: flex-start;

              .head {
                height: @headLength;
                width: @headLength;
                // background-color: skyblue;

                border-radius: 50%;

                margin-right: 10px;
              }

              .nameAndTime {
                height: @headLength;

                .Rows();
                justify-content: flex-start;
                align-items: flex-start;

                .name {
                  font-size: large;
                  margin-bottom: 6px;
                }

                .time {
                  font-size: small;
                  color: grey;
                }
              }
            }

            .sayingContent {
              // width: 80%;
              padding-left: calc(@headLength + 10px);

              margin-top: 12px;

              font-size: medium;
            }

            .sayingReactionBar {
              // width: 100%;

              padding-left: calc(@headLength + 10px);

              margin-top: 25px;

              .Columns();
              justify-content: space-between;

              @media (min-width: 768px) {
                justify-content: flex-start;
              }

              > div {
                color: gray;

                .Columns();
                margin-right: 30px;
                .iconText {
                  font-size: small;
                  margin-left: 4px;
                }
              }
            }
          }
        }
      }
    }
  }
}

.yingshao_xo {
  color: white;
  visibility: hidden;
}

.tabSelected {
  border-bottom: 1px solid red;
}

.tabUnselected {
  border-bottom: 1px solid transparent;
}
</style>