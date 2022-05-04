<script lang="ts" setup>
import { reactive, withDefaults, computed, onMounted, watch, onBeforeUnmount, nextTick } from 'vue'
import store from '../../store'

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'

const dict = reactive({
  references: {
    threejsElement: null as null | HTMLElement,
  },
  data: {
  },
  functions: {
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

  // add a camera
  const camera = new THREE.PerspectiveCamera(75, elementWidth / elementHeight, 0.1, 1000)
  camera.position.z = 5 // 400

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

  const directionalLight = new THREE.DirectionalLight(0xffffff, 100)
  directionalLight.position.set(0, 1, 0)
  directionalLight.castShadow = true
  scene.add(directionalLight)

  const light = new THREE.PointLight(0xc4c4c4, 10)
  light.position.set(0, 300, 500)
  scene.add(light)

  const light2 = new THREE.PointLight(0xc4c4c4, 10)
  light2.position.set(500, 100, 0)
  scene.add(light2)

  const light3 = new THREE.PointLight(0xc4c4c4, 10)
  light3.position.set(0, 100, -500)
  scene.add(light3)

  const light4 = new THREE.PointLight(0xc4c4c4, 10)
  light4.position.set(-500, 300, 500)
  scene.add(light4)

  // add a car
  let car: GLTF|null = null
  const loader = new GLTFLoader()
  const base_url = window.location.href.split('#')[0]
  loader.load(`${base_url}car_model.glb`, (gltf: GLTF) => {
    car = gltf

    gltf.scene.scale.set(5, 5, 5)			   
    gltf.scene.position.x = 0 // Position (x = right+ left-) 
    gltf.scene.position.y = -1 // Position (y = up+, down-)
    gltf.scene.position.z = 0.5

    scene.add(gltf.scene)
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

    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    if (car) {
      // car.scene.rotation.x += 0.001
      car.scene.rotation.y += 0.01
    }

    renderer.render(scene, camera)
  }

  animate()

  // onBeforeUnmount(() => {
  //   letItStop = true
  //   nextTick(() => {
  //     threejsElement.removeChild(renderer.domElement)
  //     renderer.dispose()
  //   })
  // })
})
</script>

<template>
  <div class="ThreeJsPage">
    <div 
      :ref="(ref: any) => dict.references.threejsElement = ref"
      class="threejsElement" />
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

  background-color: aquamarine;

  .Rows();

  .Unselectable();
  .NotDraggable();
}

.threejsElement {
  width: 70%;
  height: 70%;

  background-color: aquamarine;
}
</style>