<template>
  <a-upload
    v-model:file-list="fileList"
    :action="fileupdataUrl"
    @change="uploadFileChange"
  >
    <a-button :disabled="fileList.length !== 0">
      <upload-outlined />
      上传文件
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import { uploadFile } from '../../api/demo-api'
import { message } from 'ant-design-vue'

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  thumbUrl?: string;
}

export default defineComponent({
  components: {
    UploadOutlined
  },
  setup() {
    const fileupdataUrl = ref<string>(`${process.env.VUE_APP_BASE_API}/file/upload?businessId=1111222`)
    const fileList = ref<FileItem[]>([])

    const uploadFileChange = (a:any) => {
      if (a.file && a.file.response) {
        const res = a.file.response
        if (res.code === 200) {
          // message.error(res.message);
        } else {
          fileList.value = []
          message.warning(res.message)
        }
      }
    }

    const onSuccess = (a:any) => {
      // console.log(a)
    }
    return {
      fileList,
      fileupdataUrl,
      uploadFileChange,
      onSuccess
    }
  }
})
</script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline :deep(.ant-upload-animate-enter) {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline :deep(.ant-upload-animate-leave) {
  animation-name: uploadAnimateInlineOut;
}
</style>
