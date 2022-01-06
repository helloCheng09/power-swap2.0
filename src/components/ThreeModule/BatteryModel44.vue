<template>
  <Renderer ref="renderer" antialias :alpha="false" :orbit-ctrl="{ autoRotate: false, enableDamping: true }" resize pointer>
    <Camera :position="{ x: 0.5, y: 1, z: 4 }" />
    <Scene>
      <PointLight :cast-shadow="true" :position="{ y: 11, z: 12 }" />
      <AmbientLight />

      <GltfModel :position="{ x: -0.8, y: -0.6, z: 1 }" :src="batSrc" @load="onReady" @onPointerOver="onClick" />
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
  components: { InstancedMesh, Group, Box, LambertMaterial, PhysicalMaterial, Raycaster, Plane, AmbientLight, Camera, GltfModel, Renderer, Scene, PointLight, Text, PhongMaterial },
  setup() {
    return {
      fontSrc: '/module/font/helvetiker_regular.typeface.json',
      batSrc: '/module/one-bat-shelf2.gltf'
    }
  },
  data() {
    return {
      boxColor: '#ffffff',
      gltfObj: null
    }
  },
  methods: {
    onClick() {
      console.log('12345')
    },
    onReady(model) {
      model.traverse(child => {
        if (child.isMesh) {
          // console.log(child.material.color)
          // child.material.color = { r: 12, g: 12, a: 12 }
          this.gltfObj = child.material.color
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
