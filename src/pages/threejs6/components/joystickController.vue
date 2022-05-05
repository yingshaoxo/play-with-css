<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, ref, defineExpose } from 'vue'

// interface Props {
//   msg?: string
//   labels?: string[]
// }

// const props = withDefaults(defineProps<Props>(), {
//   msg: 'hello',
//   labels: () => ['one', 'two'],
// })

// eslint-disable-next-line 
const emit = defineEmits<{
  (e: 'onDegressChange', degress: number): void
}>()

interface Point {
  x: number
  y: number
}

const isInMobile = () => {
  const ua = navigator.userAgent
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return true
  }
  return false
}

const getTheAngleOfTwoPoint = (pointA: Point, pointB: Point) => {
  const x = pointB.x - pointA.x
  const y = pointB.y - pointA.y
  const angle = Math.atan2(y, x) * 180 / Math.PI
  return angle
}

const getThePointByOriginalPointAndAngleAndDistance = (originalPoint: Point, Angle: number, distance: number) => {
  const x = originalPoint.x + distance * Math.cos(Angle * Math.PI / 180)
  const y = originalPoint.y + distance * Math.sin(Angle * Math.PI / 180)
  return { x, y }
}

const dict = reactive({
  references: {
    backgroundElement: null as null | HTMLElement,
    bigCircleElement: null as null | HTMLElement,
    smallCircleElement: null as null | HTMLElement,
  },
  data: {
    startPoint: null as null | Point,
    onPressing: false,
    angle: null as null | number,
    distance: 0,
  },
  functions: {
    setVisible: (htmlElement: HTMLElement, isVisible: boolean) => {
      if (isVisible) {
        htmlElement.style.visibility = 'visible'
      } else {
        htmlElement.style.visibility = 'hidden'
      }
    },
    setTheCenterOfAnElementToAPoint: (element: HTMLElement, point: Point) => {
      const elementWidth = Math.round(element.offsetWidth / 2)
      const elementHeight = Math.round(element.offsetHeight / 2)
      if (elementWidth && elementHeight) {
        element.style.left = `${point.x - (elementWidth)}px`
        element.style.top = `${point.y - (elementHeight)}px`
      }
      // element.style.left = `${point.x}px`
      // element.style.top = `${point.y}px`
    },
    setBigCircleLocation: (point: Point) => {
      const bigCircleElement = dict.references.bigCircleElement
      if (bigCircleElement) {
        dict.functions.setTheCenterOfAnElementToAPoint(bigCircleElement, point)
      }
    },
    setSmallCircleLocation: (point: Point) => {
      const smallCircleElement = dict.references.smallCircleElement
      const bigCircleElement = dict.references.bigCircleElement
      if (smallCircleElement && bigCircleElement) {
        let newPoint = {
          x: point.x - bigCircleElement.offsetLeft,
          y: point.y - bigCircleElement.offsetTop,
        }
        dict.functions.setTheCenterOfAnElementToAPoint(smallCircleElement, newPoint)
      }
    },
    setBigCircleVisibility: (isVisible: boolean) => {
      const bigCircleElement = dict.references.bigCircleElement
      if (bigCircleElement) {
        dict.functions.setVisible(bigCircleElement, isVisible)
      }
    },
    getTheCenterPointOfBigCircle: (): Point | null => {
      const bigCircleElement = dict.references.bigCircleElement
      if (bigCircleElement) {
        const bigCircleElementWidth = bigCircleElement.offsetWidth
        const bigCircleElementHeight = bigCircleElement.offsetHeight
        let tempX = bigCircleElementWidth / 2
        let tempY = bigCircleElementHeight / 2
        tempX += bigCircleElement.offsetLeft
        tempY += bigCircleElement.offsetTop
        return {
          x: tempX,
          y: tempY,
        }
      }
      return null
    },
    resetThePositionOfSmallCircle: () => {
      const bigCircleCenterPoint = dict.functions.getTheCenterPointOfBigCircle()
      if (bigCircleCenterPoint) {
        const smallCircleElement = dict.references.smallCircleElement
        if (smallCircleElement) {
          dict.functions.setSmallCircleLocation(bigCircleCenterPoint)
          dict.data.distance = 0
        }
      }
    },
    doesThePointInsideOfBigCircle: (point: Point): boolean => {
      const bigCircleCenterPoint = dict.functions.getTheCenterPointOfBigCircle()
      if (bigCircleCenterPoint) {
        const bigCircleElement = dict.references.bigCircleElement
        const smallCircleElement = dict.references.smallCircleElement
        if (bigCircleElement && smallCircleElement) {
          const bigCircleElementWidth = bigCircleElement.offsetWidth
          const bigCircleElementHeight = bigCircleElement.offsetHeight
          const bigCircleRadius = Math.sqrt(bigCircleElementWidth * bigCircleElementWidth + bigCircleElementHeight * bigCircleElementHeight) / 2
          let distance = Math.sqrt(((point.x - bigCircleCenterPoint.x) ** 2) + ((point.y - bigCircleCenterPoint.y) ** 2))
          // console.log('distance: ', distance)
          // console.log('bigCircleRadius: ', bigCircleRadius)
          dict.data.distance = distance

          const smallCircleElementWidth = smallCircleElement.offsetWidth
          const smallCircleElementHeight = smallCircleElement.offsetHeight
          const smallCircleDiameter = Math.sqrt((smallCircleElementWidth ** 2) + (smallCircleElementHeight ** 2)) * 0.55
          return (distance + smallCircleDiameter) <= bigCircleRadius
        }
      }
      return false
    },
    getTheAngleOfTheMovementByGivingAPoint: (fingerPoint: Point) => {
      const bigCircleCenterPoint = dict.functions.getTheCenterPointOfBigCircle()
      if (bigCircleCenterPoint) {
        const angle = getTheAngleOfTwoPoint(bigCircleCenterPoint, fingerPoint)
        dict.data.angle = angle
        // console.log(Math.round(angle))
        return angle
      }
      return null
    },
    setThePositionOfSmallCircleToACorrespondingPlaceByGivingTheFingerPoint: (fingerPoint: Point) => {
      const bigCircleCenterPoint = dict.functions.getTheCenterPointOfBigCircle()
      if (bigCircleCenterPoint) {
        const smallCircleElement = dict.references.smallCircleElement
        const bigCircleElement = dict.references.bigCircleElement
        if (smallCircleElement && bigCircleElement) {
          const smallCircleElementWidth = smallCircleElement.offsetWidth
          const smallCircleElementHeight = smallCircleElement.offsetHeight
          const smallCircleDiameter = Math.sqrt((smallCircleElementWidth ** 2) + (smallCircleElementHeight ** 2)) * 0.55

          const bigCircleElementWidth = bigCircleElement.offsetWidth
          const bigCircleElementHeight = bigCircleElement.offsetHeight
          const bigCircleRadius = Math.sqrt(bigCircleElementWidth * bigCircleElementWidth + bigCircleElementHeight * bigCircleElementHeight) / 2

          const angle = getTheAngleOfTwoPoint(bigCircleCenterPoint, fingerPoint)
          dict.data.angle = angle
          // console.log(Math.round(angle))
          const newPoint = getThePointByOriginalPointAndAngleAndDistance(bigCircleCenterPoint, angle, bigCircleRadius - smallCircleDiameter)

          // dict.functions.setTheCenterOfAnElementToAPoint(smallCircleElement, newPoint)
          dict.functions.setSmallCircleLocation(newPoint)
        }
      } else {
        console.log('bigCircleCenterPoint is null')
      }
    },
  },
})

onMounted(async () => {
  const backgroundElement = dict.references.backgroundElement

  const onStart = (point: Point) => {
    // console.log('touchstart', point)
    dict.data.startPoint = point
    dict.functions.setBigCircleLocation(point)
    dict.functions.resetThePositionOfSmallCircle()
    dict.functions.setBigCircleVisibility(true)

    dict.data.onPressing = true
  }

  const onMove = (point: Point) => {
    // console.log('touchmove', point)
    const insideBigCircle = dict.functions.doesThePointInsideOfBigCircle(point)
    // console.log(insideBigCircle)
    if (insideBigCircle) {
      dict.functions.setSmallCircleLocation(point)
      dict.functions.getTheAngleOfTheMovementByGivingAPoint(point)
    } else {
      dict.functions.setThePositionOfSmallCircleToACorrespondingPlaceByGivingTheFingerPoint(point)
    }
  }

  const onEnd = () => {
    dict.data.startPoint = null

    // console.log('touchend', point)
    dict.functions.resetThePositionOfSmallCircle()
    dict.functions.setBigCircleVisibility(false)

    dict.data.onPressing = false
  }

  if (backgroundElement != null) {
    backgroundElement.ontouchstart = (event: TouchEvent) => {
      const touch = event.touches[0]
      const point = {
        x: touch.clientX - backgroundElement.offsetLeft,
        y: touch.clientY - backgroundElement.offsetTop,
      }
      onStart(point)
    }

    backgroundElement.ontouchmove = (event: TouchEvent) => {
      const touch = event.touches[0]
      const point = {
        x: touch.clientX - backgroundElement.offsetLeft,
        y: touch.clientY - backgroundElement.offsetTop,
      }
      onMove(point)
    }

    backgroundElement.ontouchend = () => {
      // console.log('touchend')
      onEnd()
    }

    backgroundElement.ontouchcancel = () => {
      // console.log('touchcancel')
      onEnd()
    }
  }
})

watch(() => dict.data.angle, (newValue: any, _oldValue: any) => {
  emit('onDegressChange', newValue)
})

const inFullScreen = ref(false)
const fullscreenToggleFunction = () => {
  if (inFullScreen.value) {
    const document_ = document as any
    if (document_.exitFullscreen) {
      document_.exitFullscreen()
    } else if (document_?.webkitExitFullscreen) { /* Safari */
      document_?.webkitExitFullscreen()
    } else if (document_?.msExitFullscreen) { /* IE11 */
      document_?.msExitFullscreen()
    }
    inFullScreen.value = false
  } else {
    const element = document.documentElement as any
    // const element = dict.references.backgroundElement as any
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element?.mozRequestFullScreen) {
      element?.mozRequestFullScreen()
    } else if (element?.webkitRequestFullscreen) {
      element?.webkitRequestFullscreen()
    } else if (element?.msRequestFullscreen) {
      element?.msRequestFullscreen()
    }
    inFullScreen.value = true
  }
}

defineExpose({
  dict,
})
</script>

<template>
  <!-- <div class="yingshao_xo">Made by yingshaoxo</div> -->
  <template v-if="isInMobile()">
    <!-- <button class="goFullscreenButton" @click="fullscreenToggleFunction">
        {{ inFullScreen ? 'Exit Fullscreen' : 'Go To Fullscreen' }}
      </button> -->
    <div :ref="(ref: any) => dict.references.backgroundElement = ref" class="joystick-active-area">
      <!-- <div>yingshaoxo</div> -->
      <div :ref="(ref: any) => dict.references.bigCircleElement = ref" class="bigCircle">
        <div :ref="(ref: any) => dict.references.smallCircleElement = ref" class="smallCircle" />
      </div>
    </div>
  </template>
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

.goFullscreenButton {
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 12px;
}

// .JoyStickPage {
//   width: 100%;
//   height: 100%;

//   overflow: hidden !important;

//   .Rows();

//   .Unselectable();
//   .NotDraggable();
// }

.joystick-active-area {
  width: 100%;
  height: 100%;

  // position: relative;
  position: absolute;
  overflow: hidden !important;

  // background-color: rgba(0, 0, 255, 0.1);

  .Rows();

  .Unselectable();
  .NotDraggable();
}

.bigCircle {
  position: absolute;

  width: @joystick-length;
  height: @joystick-length;

  border-radius: 50%;
  // background-color: rgba(0, 0, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.2);

  // opacity: 0.7;

  .Unselectable();

  visibility: hidden;
}

.smallCircle {
  position: absolute;

  width: calc(@joystick-length*0.35);
  height: calc(@joystick-length*0.35);

  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.8);

  @shadowColor: rgba(220, 144, 144, 0.5);
  -moz-box-shadow: inset 0 0 10px @shadowColor;
  -webkit-box-shadow: inset 0 0 10px @shadowColor;
  box-shadow: inset 0 0 10px @shadowColor;

  .Unselectable();
}

.yingshao_xo {
  color: white;
}
</style>