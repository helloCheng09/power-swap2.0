<template>
  <!--  :orbit-ctrl="{ autoRotate: false, }"-->

  <Renderer
    id="BatRenderer"
    ref="renderer"
    antialias
    :orbit-ctrl="{ autoRotate: false,enabled:true,enableRotate: true,enableZoom: true }"
    :alpha="false"
    resize
    :pointer="{ intersectRecursive: true}"
  >
    <Camera :position="{ x:-8, y: 8, z: 14 }" />
    <Scene>
      <!--      <PointLight :cast-shadow="false" :position="{ y: 11 , z: 12 }" />-->
      <AmbientLight />
      <PointLight ref="light" color="#fff" :intensity="1" :position="{ x: 0, y: 5, z: 2 }">
        <Sphere :radius="0.3" />
      </PointLight>
      <!--      <HemisphereLight sky-color="0x0000ff" ground-color="0x00ff00" :intensity="1">-->
      <!--        <Sphere :radius="1" />-->
      <!--      </HemisphereLight>-->
      <!--      <GltfModel :position="{ x: -0.8, y: -0.2, z: 1 }" :src="batSrc" @load="onReady" @pointerMove="boxMove" />-->
      <!--      <Text text="Soc 99%" :font-src="fontSrc" :size="0.1" :height="0.01" :position="{ x: -1.4, y: -0.2, z: 0.5 }">-->
      <!--        <PhongMaterial color="#4A2EFF" />-->
      <!--      </Text>-->

      <!--      <GltfModel :position="{ x: -0.8, y: -0.6, z: 1 }" :src="batSrc" @load="onReady" @pointerMove="boxMove" />-->
      <!--      <Text text="Soc 19%" :font-src="fontSrc" :size="0.1" :height="0.01" :position="{ x: -1.4, y:-0.6, z: 0.5 }">-->
      <!--        <PhongMaterial color="#ff2e2e" />-->
      <!--      </Text>-->

      <group-bat-text
        v-for="(item, index) in 8"
        :key="item"
        :bat-soc="`A${item} ` + Math.ceil( item * 1.6 )+ '%'"
        :bat-cor-axis="{ x: -6.25, y: ( index * 0.5 - 1.8), z: 6.5 }"
        :text-cor-axis="{ x: -7.8, y: ( index * 0.5 - 0.8), z: 0.9 }"
        text-color="#66F555"
      />

      <!--      <group-bat-text-->
      <!--        v-for="(item, index) in 4"-->
      <!--        :key="item"-->
      <!--        :bat-soc="`B${item} ` + Math.ceil( item * 1.6 )+ '%'"-->
      <!--        :bat-cor-axis="{ x: -1.25, y: ( index * 0.37 - 1), z: 1 }"-->
      <!--        :text-cor-axis="{ x: -4.2, y: (0.1 + index * 0.37 - 1), z: 0.5 }"-->
      <!--        text-color="#66F555"-->
      <!--      />-->

      <!--      <group-bat-text-->
      <!--        v-for="(item, index) in 8"-->
      <!--        :key="item"-->
      <!--        :bat-soc="`C${item} ` + Math.ceil( item * 1.6 )+ '%'"-->
      <!--        :bat-cor-axis="{ x: 3.25, y: ( index * 0.37 - 1), z: 1 }"-->
      <!--        :text-cor-axis="{ x: -0.2, y: (0.1 + index * 0.37 - 1), z: 0.5 }"-->
      <!--        text-color="#66F555"-->
      <!--      />-->

      <!--      <group-bat-text-->
      <!--        v-for="(item, index) in 3"-->
      <!--        :key="item"-->
      <!--        :bat-soc="`D${item} ` + Math.ceil( item * 1.6 )+ '%'"-->
      <!--        :bat-cor-axis="{ x: 7.25, y: ( index * 0.37 - 1), z: 1 }"-->
      <!--        :text-cor-axis="{ x: 3.8, y: (0.1 + index * 0.37 - 1), z: 0.5 }"-->
      <!--        text-color="#66F555"-->
      <!--      />-->

      <!--      <group-bat-text-->
      <!--        v-for="(item, index) in 6"-->
      <!--        :key="item"-->
      <!--        :bat-soc="`E${item} ` + Math.ceil( item * 1.6 )+ '%'"-->
      <!--        :bat-cor-axis="{ x: -5.25, y: ( index * 0.37 - 1), z: 5 }"-->
      <!--        :text-cor-axis="{ x:-8.2, y: (0.1 + index * 0.37 - 1), z: 4.5 }"-->
      <!--        text-color="#66F555"-->
      <!--      />-->

      <!--      <group-bat-text-->
      <!--        v-for="(item, index) in 5"-->
      <!--        :key="item"-->
      <!--        :bat-soc="`F${item} ` + Math.ceil( item * 1.6 )+ '%'"-->
      <!--        :bat-cor-axis="{ x: -1.25, y: ( index * 0.37 - 1), z: 5 }"-->
      <!--        :text-cor-axis="{ x: -4.2, y: (0.1 + index * 0.37 - 1), z: 4.5 }"-->
      <!--        text-color="#66F555"-->
      <!--      />-->
      <!--      <group-bat-text :bat-cor-axis="{ x: -0.8, y: 0.35, z: 1 }" :text-cor-axis="{ x: -1.4, y: 0.45, z: 0.5 }" />-->

      <!--      <plane :width="18" :height="18" :rotation="{ x: - Math.PI / 2, } " :position="{y: -1.2, z: 2}">-->
      <!--        <StandardMaterial dobule-side :props="{ displacementScale: 0.2, roughness: 0.4, metalness: 0, normalMap: 1, aoMap: 1 }">-->
      <!--          <Texture :props="texturesProps" src="/module/textures/metal/1.jpg" />-->
      <!--          <Texture :props="texturesProps" src="/module/textures/metal/2.jpg" name="displacementMap" />-->
      <!--          <Texture :props="texturesProps" src="/module/textures/metal/3.jpg" name="normalMap" />-->
      <!--          <Texture :props="texturesProps" src="/module/textures/metal/4.png" name="roughnessMap" />-->
      <!--          <Texture :props="texturesProps" src="/module/textures/metal/5.jpg" name="aoMap" />-->
      <!--        </StandardMaterial>-->
      <!--      </plane>-->

      <EffectComposer>
        <RenderPass />
        <!--        <UnrealBloomPass :strength="0.1" />-->
        <!--        <FXAAPass />-->
      </EffectComposer>
    </Scene>
  </Renderer>
</template>

<script>
import { RepeatWrapping } from 'three'
import { HemisphereLight, Box, Sphere, FXAAPass, EffectComposer, RenderPass, UnrealBloomPass, StandardMaterial, Texture, Plane, AmbientLight, Camera, Renderer, Scene, PointLight } from 'troisjs'
import GroupBatText from './GroupBatText.vue'

export default {
  components: { HemisphereLight, Box, Sphere, FXAAPass, EffectComposer, RenderPass, UnrealBloomPass, StandardMaterial, Texture, Plane, GroupBatText, AmbientLight, Camera, Renderer, Scene, PointLight },
  setup() {
    return {
      timer: null,
      gltfObj: null,
      batMeshArr: null,
      fontSrc: '/module/font/helvetiker_regular.typeface.json',
      batSrc: '/module/one-bat-shelf2.gltf',
      texturesProps: {
        repeat: { x: 10, y: 10 },
        wrapS: RepeatWrapping,
        wrapT: RepeatWrapping
      }
    }
  },
  // data() {
  //   return {
  //     timer: null,
  //     gltfObj: null,
  //     batMeshArr: null,
  //     fontSrc: '/module/font/helvetiker_regular.typeface.json',
  //     batSrc: '/module/one-bat-shelf2.gltf'
  //   }
  // },
  methods: {
    boxMove() {
      this.batMeshArr.map(child => {
        child.material.color = { r: 0.7667, g: 0.7667, a: 0.7667 }
      })

      this.timer = setTimeout(() => {
        this.batMeshArr.map(child => {
          child.material.color = child.material.colorClone
        })
      }, 200)
    },
    onReady(model) {
      console.log(model)
      this.batMeshArr = []

      model.traverse(child => {
        if (child.isMesh) {
          child.material.colorClone = child.material.color
          this.batMeshArr.push(child)
        }
      })
    }

  }
}
</script>
<style>
#BatRenderer {
  cursor: pointer;
  color: #005eff;
}
</style>
