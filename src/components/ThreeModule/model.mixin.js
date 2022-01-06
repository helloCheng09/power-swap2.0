// eslint-disable-next-line no-unused-vars
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Clock,
  AnimationMixer,
  PCFSoftShadowMap,
  AmbientLight,
  SpotLight,
  DirectionalLight,
  Color, MeshPhysicalMaterial,
  PlaneBufferGeometry, DoubleSide, Mesh,
  DirectionalLightHelper
} from 'three'
// test unit common
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import debounce from 'lodash/debounce'

const windowRaido = 1
// const gridHelper = new GridHelper(50, 25)
// gridHelper.position.y = 3.8
const geo = new PlaneBufferGeometry(100, 100)
const mat = new MeshPhysicalMaterial({ color: 0xfddddd, side: DoubleSide })
const gridHelper = new Mesh(geo, mat)
gridHelper.position.y = 3.8
gridHelper.rotation.x = Math.PI / 2

export default {
  data() {
    return {
      timerRoat: null,
      openAni: false,
      scene: undefined,
      camera: undefined,
      renderer: undefined,
      animationMixer: undefined,
      controls: undefined,
      timerRender: null
    }
  },
  created() {
    // render function debounce
    this.render = debounce(this.render, 100)
  },
  mounted() {
    // this.initWidth = 340
    // this.initHeight = 240
    document.querySelector('#container').style.width = `${this.initWidth}px`
    document.querySelector('#container').style.height = `${this.initHeight}px`
    // addEventListener('click', this.clickModel, false)
  },
  computed: {
    // mouse: () => new Vector2(),
    color: () => new Color()
  },
  methods: {
    async  init() {
      // 舞台
      this.scene = new Scene()
      // webGL
      this.renderer = new WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(this.initWidth, this.initHeight)
      this.renderer.setClearColor(0xffffff, 0)
      this.renderer.setPixelRatio(2)
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = PCFSoftShadowMap

      // 摄像
      const aspect = this.initWidth / this.initHeight
      this.camera = new PerspectiveCamera(24, aspect, 0.1, 1000)
      // this.camera = new PerspectiveCamera(8, aspect, 0.1, 1000)
      // this.camera.position.set(90, 34, 0)
      this.camera.position.set(90, 17, 0)
      // animation
      this.animationMixer = new AnimationMixer(this.scene)

      // control 360deg
      this.controlGeo()

      // append canvas
      document.querySelector('#container').appendChild(this.renderer.domElement)
      // Listener
      addEventListener('resize', () => this.onWindowResize(), false)
    },
    light() {
      const ambientLight = new AmbientLight(0xffffff, 1)
      this.scene.add(ambientLight)

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

      this.scene.add(light)
      // this.scene.add(spotLight)
      // eslint-disable-next-line no-unused-vars
      const helper = new DirectionalLightHelper(directionalLight, 10, 0xff5500)
      // eslint-disable-next-line no-unused-vars
      const helper2 = new DirectionalLightHelper(directionalLight2, 10, 0xff5500)
      this.scene.add(directionalLight)
      this.scene.add(directionalLight2)
      // this.scene.add(helper)
      // this.scene.add(helper2)

      // this.scene.add(gridHelper)
    },
    onWindowResize() {
      this.camera.aspect = this.initWidth * windowRaido / this.initHeight * windowRaido
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.initWidth * windowRaido, this.initHeight * windowRaido)
    },
    appendGeo() {
      console.log('You should redefined a new Function to append Geometry.')
    },
    controlGeo() {
      // this.isShow ? this.controls = new OrbitControls(this.camera, this.renderer.domElement) : null
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.target.set(0, 2, 0)
      this.controls.update()

      // this.timerRoat = setTimeout(() => {
      //   clearTimeout(this.timerRoat)
      //     setInterval(() => {
      //     this.render()
      //     this.scene.rotateY(0.016)// 每次绕y轴旋转0.01弧
      //   }, 130)
      // }, 5000)
    },
    render() {
      this.renderer.render(this.scene, this.camera)
      this.controls && this.controls.update()
      requestAnimationFrame(this.render)
      const delta = this.clock.getDelta()
      this.animationMixer.update(delta)
      // if (!this.stopRoat) this.scene.rotateY(-0.01)
    }
  }

}
