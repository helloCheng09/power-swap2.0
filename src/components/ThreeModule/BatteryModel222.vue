<template>
  <div id="BatModelCon" />
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Scene, PerspectiveCamera, WebGLRenderer, Clock, AnimationMixer, PCFSoftShadowMap, AmbientLight, SpotLight, DirectionalLight, Color, MeshPhysicalMaterial, PlaneBufferGeometry, DoubleSide, Mesh, DirectionalLightHelper, MeshBasicMaterial, FontLoader, ShapeBufferGeometry
} from 'three'
// eslint-disable-next-line no-unused-vars
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// eslint-disable-next-line no-unused-vars
const gltfLoader = new GLTFLoader() /* 实例化加载器*/
let renderer, camera, animationMixer, controls, scene, clock

export default {
  mounted() {
    scene = new Scene()
    clock = new Clock()

    renderer = new WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0xffffff, 0)
    renderer.setPixelRatio(2)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFSoftShadowMap

    // 摄像
    const aspect = 1
    camera = new PerspectiveCamera(24, aspect, 0.1, 1000)
    camera.position.set(90, 17, 0)
    // animation
    animationMixer = new AnimationMixer(scene)

    // control 360deg
    controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 2, 0)
    controls.update()

    // Append canvas
    document.querySelector('#BatModelCon').appendChild(renderer.domElement)

    // 灯光
    this.sceneLight(scene)

    // 渲染model
    this.appendModel(scene)

    // Render
    this.modelRender(renderer, scene, camera, controls, clock, animationMixer)
  },
  methods: {
    appendModel(scene) {
      gltfLoader.load('/three/yp_station5.gltf', obj => {
        const model = obj.scene

        console.log(model)
        obj.scene.traverse((object) => {
          if (object.isMesh) {
            object.castShadow = true
            object.receiveShadow = false
          }
        })
        model.castShadow = true

        scene.add(model)
      })
    },
    modelRender(renderer, scene, camera, controls, clock, animationMixer) {
      renderer.render(scene, camera)
      controls && controls.update()
      // window.requestAnimationFrame(this.render)
      const delta = clock.getDelta()
      animationMixer.update(delta)
    },
    sceneLight(scene) {
      const ambientLight = new AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      const spotLight = new SpotLight(0xffffff, 0.7, 380, Math.PI / 4.4)
      // const spotLight2 = new SpotLight(0xffffff, 0.8, 420, Math.PI / 8,)
      // const pointLight = new PointLight(0xffffff, 0.5, 380)
      const directionalLight = new DirectionalLight(0xffffff, 0.8)
      const directionalLight2 = new DirectionalLight(0xffffff, 0.8)
      const light = new AmbientLight(0xffffff, 0.5)

      // spotLight.position.set(50, 140, 120)
      // spotLight2.position.set(120, 140, 100)
      // pointLight.position.set(100, 80, 80)
      directionalLight.position.set(30, 10, -10)
      directionalLight2.position.set(-20, 20, -10)

      spotLight.castShadow = true
      spotLight.receiveShadow = true
      spotLight.shadow.mapSize.width = 2048 // default
      spotLight.shadow.mapSize.height = 2048 // default
      spotLight.shadow.camera.near = 1 // default
      spotLight.shadow.camera.far = 500 // default
      spotLight.shadow.focus = 10// default
      // spotLight2.castShadow = true

      scene.add(light)
      // scene.add(spotLight)
      // eslint-disable-next-line no-unused-vars
      const helper = new DirectionalLightHelper(directionalLight, 10, 0xff5500)
      // eslint-disable-next-line no-unused-vars
      const helper2 = new DirectionalLightHelper(directionalLight2, 10, 0xff5500)
      scene.add(directionalLight)
      scene.add(directionalLight2)
      // scene.add(helper)
      // scene.add(helper2)
      // scene.add(gridHelper)
    }
  }
}
</script>

<style scoped>
#BatModelCon {
  display: block;
  /*width: 40vw;*/
  /*height: 30vh;*/
  margin: 0 auto;
  border: 1px solid #333;
  /*background: lightblue;*/
}
</style>
