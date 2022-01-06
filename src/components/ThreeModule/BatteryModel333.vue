<template>
  <Renderer ref="renderer" width="1000" height="500" antialias :orbit-ctrl="{ enableDamping: true }">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 11, z: 50 }" />
      <Box>
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'
export default {
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
  mounted() {
    const renderer = this.$refs.renderer
    const orbitCtrl = this.$ref.renderer.three.cameraCtrl
    console.log(orbitCtrl)

    renderer.onInit(() => {
      renderer.renderFn = () => {
        // do what you want
      }
    })
  }
}
</script>
