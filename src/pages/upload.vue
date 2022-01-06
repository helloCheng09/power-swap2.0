<template>
  <div>
    <upload-pic />
    <upload-file />
  </div>
</template>

<script>
import UploadPic from '../components/Upload/UploadPic.vue'
import UploadFile from '../components/Upload/UploadFile.vue'

export default {
  name: 'Upload',
  components: { UploadPic, UploadFile }
}
</script>

