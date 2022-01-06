<template>
  <GltfModel
    :position="batCorAxis"
    :src="batSrc"
    :rotation="{ y: Math.PI / 2, }"
    @load="onReady"
    @click="boxMove"
  />
  <Text :text="batSoc" :font-src="fontSrc" :size="0.15" :height="0.01" :position="textCorAxis">
    <PhongMaterial :color="textColor" />
  </Text>

</template>

<script>
import { GltfModel, Text, PhongMaterial } from 'troisjs'

export default {
  components: { GltfModel, Text, PhongMaterial },
  props: {
    batCorAxis: {
      type: Object,
      required: true
    },
    textCorAxis: {
      type: Object,
      required: true
    },
    batSoc: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },

  setup() {
    return {
      timer: null,
      gltfObj: null,
      batMeshArr: null,
      fontSrc: '/module/font/helvetiker_bold.typeface.json',
      // batSrc: '/module/one-bat-shelf2.gltf'
      batSrc: '/module/one-bat.gltf'
    }
  },

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

<style scoped>

</style>
