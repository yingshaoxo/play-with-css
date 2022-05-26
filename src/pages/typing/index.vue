<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, ref, onActivated, onDeactivated } from 'vue'

import { } from '@ant-design/icons-vue'
import { initial } from 'lodash'

const preProcessString = (str: string) => str.replace(/\s/g, '␣').split('')

const dict = reactive({
  tempData: {
    init: false,
    tempUserText: '',
    sentences: [],
    sentenceIndex: -1,
  },
  data: {
    stringList: preProcessString('Nobody is perfect.'),
    index: 0,
    wrongIndex: -1,
  },
  functions: {
    reset: () => {
      dict.data.index = 0
      dict.data.wrongIndex = -1
      dict.tempData.init = true
    },
    nextSentence: () => {
      const nextIndex = dict.tempData.sentenceIndex + 1
      if (nextIndex > dict.tempData.sentences.length - 1) {
        dict.tempData.init = false
        return
      }
      dict.tempData.sentenceIndex = nextIndex

      dict.data.stringList = preProcessString(dict.tempData.sentences[nextIndex])
      dict.functions.reset()
    },
    handleTheChar: (char: string) => {
      const data = dict.data

      if (data.stringList[data.index] == char) {
        data.index += 1
        data.wrongIndex = -1

        if (data.index > data.stringList.length - 1) {
          dict.functions.nextSentence()
        }
      } else {
        data.wrongIndex = data.index
      }
    },
    getUserTextInput: () => {
      const text = dict.tempData.tempUserText

      if (text.length == 0) {
        alert('I can\'t do it without any text!')
      }

      dict.tempData.sentences = text.split('\n').filter((text:string) => text.trim() != '') as never[]

      dict.tempData.sentenceIndex = -1

      dict.functions.nextSentence()
      dict.tempData.init = true
    },
  },
})

const keydownListener = (event: any) => {
  let key = String(event.key)
  if (key == ' ') { 
    key = '␣'
    if (dict.tempData.init) {
      event.preventDefault()
    }
  }
  console.log(key) 
  dict.functions.handleTheChar(key)
}

onMounted(async () => {
  document.addEventListener('keydown', keydownListener)
})

// onDeactivated(async () => {
//   document.removeEventListener('keydown', keydownListener)
// })
</script>

<template>
  <div
    class="centerBody">
    <div
      v-if="dict.tempData.init == false"
      class="initPage">
      <textarea
        v-model="dict.tempData.tempUserText"
        placeholder="Please give me the text you want to practice on!"
        :rows="dict.tempData.tempUserText.split('\n').length + 4"
        cols="50" />
      <div
        class="getInButton"
        @click="dict.functions.getUserTextInput()">
        Let's go!
      </div>
    </div>
    <div
      v-if="dict.tempData.init == true"
      class="charsArea">
      <div
        v-for="(char, index) in dict.data.stringList"
        :key="index"
        :class="{
          wrongChar: index==dict.data.wrongIndex,
          rightChar: index < dict.data.index
        }"
        class="singleCharBox">
        {{ char }}
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

.centerBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #F4F4F4;
}

@charBoxLength: 60px;

.charsArea {
  .Columns();

  width: 100%;
  overflow-y: scroll;

  margin-top: 100px;
  margin-bottom: 100px;

  display: grid;
  grid-template-columns: repeat(8, @charBoxLength);
  row-gap: 10px;
  column-gap: 15px;

  .singleCharBox {
    .Rows();

    width: @charBoxLength;
    height: @charBoxLength;

    font-size: x-large;
    color: #6F6F6F;

    border: 2px solid #DBDBDB;
  }
}

.rightChar {
  // background-color: #41C575;
  background-color: #E2F7E2;
}

.wrongChar {
  // background-color: #F44336;
  background-color: #F7E2E2;
}

.initPage {
  .Rows();
}

.getInButton {
  margin-top: 20px;

	box-shadow: 0px 1px 0px 0px #1c1b18;
	background:linear-gradient(to bottom, #eae0c2 5%, #ccc2a6 100%);
	background-color:#eae0c2;
	border-radius:15px;
	border:1px solid #333029;
	display:inline-block;
	cursor:pointer;
	color:#505739;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:12px 16px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;

  &:hover {
    background:linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
    background-color:#ccc2a6;
  }
  &:active {
    position:relative;
    top:1px;
  }
}

</style>