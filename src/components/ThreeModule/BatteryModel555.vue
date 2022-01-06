<script src="../../../node_modules/_troisjs@0.3.2@troisjs/src/meshes/Text.ts"></script>
<template>
  <Renderer ref="renderer" antialias :alpha="false" :orbit-ctrl="{ autoRotate: false, enableDamping: true }" resize :pointer="{ intersectRecursive: true,intersectMode: 'frame' }">
    <Camera :position="{ x: 0.5, y: 1, z: 4 }" />
    <Scene>
      <PointLight :cast-shadow="false" :position="{ y: 11, z: 12 }" />
      <AmbientLight />

      <GltfModel :position="{ x: -0.8, y: -0.6, z: 1 }" :src="batSrc" @load="onReady" @pointerMove="boxMove" />
      <Text text="Soc 19%" :font-src="fontSrc" :size="0.1" :height="0.01" :position="{ x: -1, y: 0.15, z: 0.5 }">
        <PhongMaterial color="#ff2e2e" />
      </Text>
      <!--      <Plane :width="5" :height="5" :rotation="{ x:4 }" :position="{ z: 1 }" receive-shadow>-->
      <!--        <LambertMaterial />-->
      <!--      </Plane>-->

      <!--      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }" @pointerOver="boxOver" @click="boxClick">-->
      <!--        <LambertMaterial :color="boxColor" />-->
      <!--      </Box>-->
    </Scene>
  </Renderer>
</template>

<script>
import { InstancedMesh, Group, Box, LambertMaterial, PhysicalMaterial, Raycaster, Plane, AmbientLight, Camera, GltfModel, Renderer, Scene, PointLight, Text, PhongMaterial } from 'troisjs'

export default {
  components: { AmbientLight, Camera, GltfModel, Renderer, Scene, PointLight, Text, PhongMaterial },
  setup() {
    return {
      timer: null,
      gltfObj: null,
      batMeshArr: null,
      fontSrc: '/module/font/helvetiker_regular.typeface.json',
      batSrc: '/module/one-bat-shelf2.gltf'
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
#xx {
  position: relative;
}
#tt {
  position: absolute;
  left: 0;
  top:0;
  font-size: 4rem;
  color: #ff2e2e;
}
</style>
