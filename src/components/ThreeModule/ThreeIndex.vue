<template>
  <div id="container" />
</template>

<script>
/**
 * 2020/2 Walt
 * add new dashbord page
 */
import {
  Mesh,
  MeshBasicMaterial,
  DoubleSide,
  FontLoader,
  ShapeBufferGeometry
} from 'three'
import threeMixins from './model.mixin.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { dobuleconfig } from './modelConfig.js'

const loader = new GLTFLoader() /* 实例化加载器*/

export default {
  mixins: [threeMixins],
  beforeRouteLeave(to, from, next) {
    this.clearObj()
    next()
  },
  props: {
    initWidth: {
      type: Number,
      required: true
    },
    initHeight: {
      type: Number,
      required: true
    },
    stopRoat: {
      type: Boolean
    },
    showBattery: {
      type: Boolean
    }
  },
  data() {
    return {
      batteryArr: [],
      dataObj: undefined,
      showHead: false,
      timer: null,
      timerArrows: null,
      replaceStatus: '空闲中',
      // frontGateAni: { open: null, close: null },
      frontGateAni: undefined,
      endGateAni: undefined,
      option: undefined,
      carModel: undefined,
      stationObj: null,
      oldStationObj: null,
      topGLTF: null,
      outerGLTF: null,
      roadGLTF: null
    }
  },
  watch: {
    showBattery(newValue, oldValue) {
      if (newValue) {
        this.topGLTF = this.stationObj[1]
        this.stationObj.splice(1, 1) // 去除仓顶
        this.outerGLTF = this.stationObj[3]
        this.stationObj.splice(3, 1) // 去除外壁
        this.roadGLTF = this.stationObj[1]
        this.stationObj.splice(1, 1) // 去除轨道

        this.camera.fov = 9
        this.camera.position.set(90, 17, 0)
        this.camera.updateProjectionMatrix()
      } else {
        this.stationObj.splice(1, 0, this.topGLTF)
        this.stationObj.splice(3, 0, this.outerGLTF)
        this.stationObj.splice(1, 0, this.roadGLTF)

        this.camera.fov = 24
        this.camera.position.set(90, 17, 0)
        this.camera.updateProjectionMatrix()
      }
    }
  },
  mounted() {
    this.initYpStation()
  },
  methods: {
    loadTunnel(x, y, z) {
      console.log(x, y, z)
      loader.load('../../public/three/yp_station5.gltf', obj => {
        console.log(obj)
        const arr = obj.scene.children[0].children[1].children

        this.stationObj = arr

        const model = obj.scene
        obj.scene.traverse((object) => {
          if (object.isMesh) {
            object.castShadow = true
            object.receiveShadow = false
          }
        })
        model.castShadow = true

        model.rotation.y = Math.PI / -0.57
        // model.position.y = y - 8
        // model.position.x = x - 10
        // model.position.z = z + 20

        model.position.y = y - 11
        model.position.x = x - 10
        model.position.z = z + 22

        const size = 2.4
        model.scale.set(size, size, size)
        // model.children[0].material.map = map
        // const mesh = new Mesh(model.children[0].geometry, mat)
        this.scene.add(model)
      })
    },
    clearObj() {
      clearInterval(this.timerArrows)
      function clearThree(obj) {
        if (!obj) { return }
        while (obj.children && obj.children.length > 0) {
          clearThree(obj.children[0])
          obj.remove(obj.children[0])
        }
        if (obj.geometry) obj && obj.geometry.dispose()

        if (obj.material) {
        // in case of map, bumpMap, normalMap, envMap ...
          Object.keys(obj.material).forEach(prop => {
            if (!obj.material[prop]) { return }
            if (obj.material[prop] !== null && typeof obj.material[prop].dispose === 'function') { obj.material[prop].dispose() }
          })
          obj && obj.material.dispose()
        }
      }
      clearThree(this.scene)
    },
    addBoldText(x, y, z, radioText, textNumber, isbaseone, location) {
      new FontLoader().load(
        '/three/font/helvetiker_bold.typeface.json',
        font => {
          this.batSoc(x, y, z, radioText, font, location)
          isbaseone ? this.bigSystemId(x, y, z, textNumber, font) : null
        }
      )
    },
    batSoc(x, y, z, radioText, font, location = 'right') {
      const posX = x + 9.9
      const posY = y - 0.2
      let posZ = z - 5.9
      const roateY = Math.PI / 2
      let colorNormal = 0x2ed573
      if (radioText >= 0 && radioText <= 30) {
        colorNormal = 0xe84118
      } else if (radioText > 30 && radioText <= 50) {
        colorNormal = 0xfbc531
      }
      if (location === 'right') {
        posZ = z + 0.2
      } else if (location === 'left') {
        posZ = z - 5.9
      }
      const matLite = new MeshBasicMaterial({
        color: colorNormal,
        transparent: false,
        opacity: 1,
        side: DoubleSide
      })
      const message = radioText ? radioText + '%' : ''
      const shapes = font.generateShapes(message, 0.6)
      const geometry = new ShapeBufferGeometry(shapes)
      geometry.computeBoundingBox()
      // make shape ( N.B. edge view not visible )
      const text = new Mesh(geometry, matLite)
      text.position.y = posY
      text.position.x = posX
      text.position.z = posZ
      text.rotation.y = roateY

      this.scene.add(text)
    },
    bigSystemId(x, y, z, textNumber, font) {
      const posX = x + 8.6
      const posY = 11.4
      const posZ = z - 3.6
      const roateY = Math.PI / 2
      const matLite = new MeshBasicMaterial({
        color: 0x00a8ff,
        side: DoubleSide
      })
      const message = textNumber
      const shapes = font.generateShapes(message, 1)
      const geometry = new ShapeBufferGeometry(shapes)
      geometry.computeBoundingBox()
      // make shape ( N.B. edge view not visible )
      const text = new Mesh(geometry, matLite)
      text.position.x = posX
      text.position.z = posZ
      text.position.y = posY
      text.rotation.y = roateY

      this.scene.add(text)
    },
    systemIdText(x, y, z, systemId, type, font, location, side = 'left') {
      let posX2, posZ2
      const posY2 = y - 0.34

      const matLite2 = new MeshBasicMaterial({
        color: 0xffffff,
        side: DoubleSide
      })
      const message2 = systemId
      const shapes2 = font.generateShapes(message2, 0.43)
      const geometry2 = new ShapeBufferGeometry(shapes2)
      geometry2.computeBoundingBox()
      // make shape ( N.B. edge view not visible )
      const text2 = new Mesh(geometry2, matLite2)

      // if (location === 'right') {
      //   posX2 = x + 9
      //   posZ2 = z - 5.45
      //   text2.rotation.y = Math.PI
      // } else {
      //   posZ2 = z - 2.55
      //   posX2 = x + 8
      // }
      if (side === 'left') {
        posZ2 = z - 2.55
        posX2 = x + 8.16
      } else {
        posX2 = x + 9
        posZ2 = z - 5.45
        text2.rotation.y = Math.PI
      }

      text2.position.x = posX2
      text2.position.y = posY2
      text2.position.z = posZ2

      this.scene.add(text2)
    },
    statusText(x, y, z, systemId, type, font, soc = '?') {
      const posX = x + 10.1
      const posY = y - 0.2
      const posZ = z - 3.5
      const roateY = Math.PI / 2
      const color = 0xffffff
      // if (soc && soc >= 0 && soc <= 30) {
      //   color = 0xef5777
      // } else if (soc && soc > 30 && soc <= 50) {
      //   color = 0xfbc531
      // }
      const matLite = new MeshBasicMaterial({ color, side: DoubleSide })
      const message = type
      const shapes = font.generateShapes(message, 0.43)
      const geometry = new ShapeBufferGeometry(shapes)
      geometry.computeBoundingBox()
      // make shape ( N.B. edge view not visible )
      const text = new Mesh(geometry, matLite)
      text.position.x = posX
      text.position.y = posY
      text.rotation.y = roateY
      if (type === '未连电源') {
        text.position.z = posZ + 0.7
      } else {
        text.position.z = posZ
      }
      this.scene.add(text)
    },
    addText(x, y, z, systemId, type, location, radioText) {
      new FontLoader().load('/three/font/font-spider.json', font => {
        this.systemIdText(x, y, z, systemId, type, font, location)
        this.systemIdText(x, y, z, systemId, type, font, location, 'right')
        this.statusText(x, y, z, systemId, type, font, radioText)
      })
    },
    async appendGeo() {
      this.light()
      let z = null
      let x = null
      let y = null

      x = dobuleconfig.globalX || 0
      y = dobuleconfig.globalY || 0
      z = dobuleconfig.globalZ || 0
      // this.addStage(x, y, z)
      // await this.loadTunnel(x, y, z)
      // await this.loadPackinGate(x, y, z)
      // await this.loadPackinGate(x, y, z, true)
      // this.addChannel(x, y, z)
      this.loadTunnel(x, y, z)
      // this.initBaseFoundation(x, y, z)
      // this.dataObj && this.renderBattery(x, y, z)
    },
    initYpStation() {
      this.init()
      if (this.scene) {
        this.clearObj()
        this.scene.children = []
        this.appendGeo()
      }
      this.render()
    }
  }
}
</script>

<style scoped>
#container {
  margin: 0 auto;
}
</style>
