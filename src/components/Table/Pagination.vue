<template>
  <!--  <a-pagination-->
  <!--    id="Pagination"-->
  <!--    v-model:current="currentRef"-->
  <!--    :total="total"-->
  <!--    :page-size-options="pageSizeOptions"-->
  <!--    show-size-changer-->
  <!--    :page-size="pageSizeRef"-->
  <!--    @change="onPaginationChange"-->
  <!--    @showSizeChange="onPaginationChange"-->
  <!--  >-->
  <!--    <template #buildOptionText="props">-->
  <!--      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>-->
  <!--      <span v-else>全部</span>-->
  <!--    </template>-->
  <!--  </a-pagination>-->
  <a-pagination id="Pagination" v-model:current="currentRef" :page-size="pageSizeRef" show-quick-jumper :total="total" @change="onPaginationChange" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 12
    },
    total: {
      type: Number,
      default: 0
    }
  },
  emit: ['onRefetchData'],
  setup(prop, context) {
    // const pageSizeOptions = ref<string[]>(['12', '20', '30', '40', '100'])
    const currentRef = ref(prop.current)
    const pageSizeRef = ref(prop.pageSize)

    const onPaginationChange = (pageNum: number, pageSize: number) => {
      currentRef.value = pageNum
      pageSizeRef.value = pageSize

      context.emit('onRefetchData', { pageNum, pageSize })
    }

    return {
      currentRef,
      pageSizeRef,
      onPaginationChange
    }
  }
})
</script>

