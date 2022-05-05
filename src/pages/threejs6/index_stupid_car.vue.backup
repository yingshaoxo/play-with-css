<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, onBeforeUnmount, nextTick, defineEmits } from 'vue'
import store from '../../store'

import JoystickController from './components/joystickController.vue'

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { AxesHelper, Group } from 'three'

import theRoadTexture from '../../assets/threejs6/road_texture2.jpg'

const degreeToRadians = (degree: number, offset = 1) => degree * (Math.PI * offset) / 180

const dict = reactive({
  references: {
    threejsElement: null as null | HTMLElement,
    joystickElement: null as null | HTMLElement,
  },
  data: {
    car: null as Group | null,
  },
  functions: {
    onDegreeChange: (degree: number) => {
      const car = dict.data.car

      if (!car) {
        return
      }

      // console.log(degree)

      const value = degreeToRadians(degree + 270, -0.8)
      car.rotation.y = value

      // console.log(value)
    },
  },
})

onMounted(async () => {
  if (!dict.references.threejsElement) {
    return
  }

  const threejsElement = dict.references.threejsElement
  const elementHeight = threejsElement.offsetHeight
  const elementWidth = threejsElement.offsetWidth

  // add a scene
  const scene = new THREE.Scene()
  const backgoundColor = new THREE.Color('rgb(129, 214, 255)')
  scene.background = backgoundColor

  // add a camera
  const camera = new THREE.PerspectiveCamera(75, elementWidth / elementHeight, 0.1, 1000)
  camera.position.z = 8 // 400
  camera.position.y = 4 // 400

  // add renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(elementWidth, elementHeight)
  threejsElement.appendChild(renderer.domElement)

  // add other objects
  // const geometry = new THREE.BoxGeometry(1, 1, 1)
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  // const cube = new THREE.Mesh(geometry, material)
  // scene.add(cube)

  // add lights
  const hlight = new THREE.AmbientLight(0x404040, 100)
  scene.add(hlight)

  // const directionalLight = new THREE.DirectionalLight(0xffffff, 10)
  // directionalLight.position.set(0, 1, 0)
  // directionalLight.castShadow = true
  // scene.add(directionalLight)

  // const light = new THREE.PointLight(0xc4c4c4, 10)
  // light.position.set(0, 300, 500)
  // scene.add(light)

  // const light2 = new THREE.PointLight(0xc4c4c4, 10)
  // light2.position.set(500, 100, 0)
  // scene.add(light2)

  // const light3 = new THREE.PointLight(0xc4c4c4, 10)
  // light3.position.set(0, 100, -500)
  // scene.add(light3)

  // const light4 = new THREE.PointLight(0xc4c4c4, 10)
  // light4.position.set(-500, 300, 500)
  // scene.add(light4)

  // add a plane
  const planeGeometry = new THREE.PlaneGeometry(10, 1000, 1, 1)
  // const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })

  const roadTexture = new THREE.TextureLoader().load(theRoadTexture)
  roadTexture.wrapS = THREE.RepeatWrapping
  roadTexture.wrapT = THREE.RepeatWrapping
  roadTexture.repeat.set(1, 1)
  const planeMaterial = new THREE.MeshBasicMaterial({ map: roadTexture })

  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = degreeToRadians(-90)
  plane.position.y = -1
  scene.add(plane)

  // add a car
  const loader = new GLTFLoader()
  const base_url = window.location.href.split('#')[0]
  loader.load(`${base_url}car_model.glb`, (gltf: GLTF) => {
    gltf.scene.scale.set(5, 5, 5)
    gltf.scene.position.x = 0 // Position (x = right+ left-) 
    gltf.scene.position.y = -1 // Position (y = up+, down-)
    gltf.scene.position.z = 0.5

    const mesh = gltf.scene
    gltf.scene.traverse((child) => { })

    let box = new THREE.Box3().setFromObject(mesh)
    box.getCenter(mesh.position) 
    mesh.position.multiplyScalar(-1)

    let pivot = new THREE.Group()
    scene.add(pivot)
    pivot.add(mesh)

    // let axesHelper = new THREE.AxesHelper(100)
    // scene.add(axesHelper)

    dict.data.car = pivot
  }, undefined, (error: any) => {
    console.log(error)
  })

  // loop
  let letItStop = false
  let animate = () => {
    if (letItStop) {
      return
    }

    requestAnimationFrame(animate)

    if (dict.data.car) {
      const joystickComponent = dict.references.joystickElement
      if (joystickComponent) {
        const distance = joystickComponent?.dict?.data?.distance
        if (distance != 0) {
          // let the car go farward
          dict.data.car.translateZ(distance / 10000)

          console.log(distance)
        }
      }
    }

    renderer.render(scene, camera)
  }

  animate()
})
</script>

<template>
  <div class="ThreeJsPage">
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
  width: 100vw;
  height: 100vh;

  // background-color: aquamarine;

  .Rows();

  .Unselectable();
  .NotDraggable();
}

.joystickController {
  position: absolute;

  background-color: rgb(255, 228, 196);
  opacity: 0.5;
}

.threejsElement {
  position: absolute;

  width: 100%;
  height: 100%;
}
</style>