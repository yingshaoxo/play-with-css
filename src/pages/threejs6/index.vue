<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, onBeforeUnmount, nextTick, defineEmits, ref } from 'vue'
import store from '../../store'

import JoystickController from './components/joystickController.vue'

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { AxesHelper, Group, Mesh, Object3D, Scene } from 'three'

import dragonBallTexture from '../../assets/threejs6/ballFire.jpg'
import { debug } from 'console'

const degreeToRadians = (degree: number, offset = 1) => degree * (Math.PI * offset) / 180

const convertDegreeToXY = (degree: number) => {
  const x = Math.cos(degreeToRadians(degree))
  const y = Math.sin(degreeToRadians(degree))

  return { x, y }
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const createAPoint = (x: number, y: number, z: number) => {
  const geometry = new THREE.SphereGeometry(0.1, 32, 32)
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(x, y, z)
  return mesh
}

const createCube = (x: number, y: number, z: number) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(x, y, z)
  return mesh
}

const spaw_colorful_box_randomly = (scene: Scene) => {
  const x = Math.random() * 10 - 5
  const y = Math.random() * 10 - 5
  const z = Math.random() * 10 - 5

  const box = createCube(x, 0, z)
  scene.add(box)
}

const dict = reactive({
  references: {
    threejsElement: null as null | HTMLElement,
    joystickElement: null as null | HTMLElement,
  },
  data: {
    show: true,
    ball: null as Mesh | null,
  },
  functions: {
    onDegreeChange: (degree: number) => {
      const ball = dict.data.ball

      if (!ball) {
        return
      }

      // console.log(degree)

      const value = degreeToRadians(degree)
      ball.rotation.x = value
      ball.rotation.y = value
      // ball.rotation.z = value

      const xy = convertDegreeToXY(degree)
      ball.position.x += xy.x * 0.05
      ball.position.z += xy.y * 0.05

      // console.log(value)
    },
  },
})

const fullscreenToggleFunction = () => {
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
}

onMounted(async () => {
  if (!dict.references.threejsElement) {
    return
  }

  fullscreenToggleFunction()

  const threejsElement = dict.references.threejsElement
  const elementHeight = threejsElement.offsetHeight
  const elementWidth = threejsElement.offsetWidth

  // add a scene
  const scene = new THREE.Scene()
  const backgoundColor = new THREE.Color('rgb(129, 214, 255)')
  scene.background = backgoundColor

  // add a camera
  const camera = new THREE.PerspectiveCamera(75, elementWidth / elementHeight, 0.1, 1000)
  camera.position.set(0, 10, 0)
  camera.up.set(0, 0, -1)
  camera.lookAt(0, 0, 0)

  // add renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(elementWidth, elementHeight)
  threejsElement.appendChild(renderer.domElement)

  // add lights
  const hlight = new THREE.AmbientLight(0x404040, 100)
  scene.add(hlight)

  // add a ball
  const geometry = new THREE.SphereGeometry(0.3, 32, 32) // (radius, widthSegments, heightSegments)
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })

  const ballTexture = new THREE.TextureLoader().load(dragonBallTexture)
  ballTexture.wrapS = THREE.RepeatWrapping
  ballTexture.wrapT = THREE.RepeatWrapping
  ballTexture.repeat.set(1, 1)
  const ballMaterial = new THREE.MeshBasicMaterial({ map: ballTexture })

  const ball = new THREE.Mesh(geometry, ballMaterial)
  scene.add(ball)
  dict.data.ball = ball

  for (let i = 0; i < 5; i++) {
    spaw_colorful_box_randomly(scene)
  }

  // loop
  let animate = () => {
    requestAnimationFrame(animate)

    if (dict.data.ball) {
      const joystickComponent = dict.references.joystickElement
      if (joystickComponent) {
        const theJoystickComponent = joystickComponent as any
        const distance = theJoystickComponent?.dict?.data?.distance
        if (distance != 0) {
          // set tracing line
          const ballPosition = dict.data.ball.position
          const newBall = createAPoint(ballPosition.x, ballPosition.y, ballPosition.z)
          scene.add(newBall)

          setTimeout(() => {
            scene.remove(newBall)
          }, 1000)
        }
      }
    }

    renderer.render(scene, camera)
  }

  animate()

  window.onresize = () => {
    const threejsElement = dict.references.threejsElement
    if (threejsElement) {
      const elementHeight = threejsElement.offsetHeight
      const elementWidth = threejsElement.offsetWidth
      renderer.setSize(elementWidth, elementHeight)
      camera.aspect = elementWidth / elementHeight
      camera.updateProjectionMatrix()
    }
  }
})

</script>

<template>
  <div
    class="ThreeJsPage"
    @click="fullscreenToggleFunction">
    <div :ref="(ref: any) => dict.references.threejsElement = ref" class="threejsElement">
      <JoystickController
        :ref="(ref: any) => dict.references.joystickElement = ref"
        class="joystickController"
        @on-degress-change="(degress: number) => {
          dict.functions.onDegreeChange(degress)
        }" />
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

.ThreeJsPage {
  position: absolute;

  width: 100vw;
  height: 100vh;

  // background-color: aquamarine;

  .Rows();

  .Unselectable();
  .NotDraggable();
}

.joystickController {
  position: absolute;

  background-color: transparent;
  opacity: 0.8;
}

.threejsElement {
  position: absolute;

  width: 100%;
  height: 100%;
}
</style>