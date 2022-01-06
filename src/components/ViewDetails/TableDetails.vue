<template>
  <a-card :bordered="false" class="app_card_wrap table_details_box">
    <div v-if="cItem" class="table_view_details_card">
      <a-typography-title :level="3">查看详情</a-typography-title>
      <a-descriptions :column="1">
        <a-descriptions-item label="ID">{{ cItem.id || '--' }}</a-descriptions-item>
        <a-descriptions-item label="设备类型编号">{{ cItem.equTypeNumber || '--' }}</a-descriptions-item>
        <a-descriptions-item label="设备编码">{{ cItem.equCode || '--' }}</a-descriptions-item>
        <a-descriptions-item label="设备编号">{{ cItem.equNum || '--' }}</a-descriptions-item>
        <a-descriptions-item label="创建时间">{{ cItem.createTime || '--' }}</a-descriptions-item>
      </a-descriptions>
      <div class="t_d_btns">
        <a-button type="link" primary @click="onRowEdit(cItem)">修 改</a-button>
        <a-button type="link" danger @click="onRowDelete(cItem)">删 除</a-button>
      </div>
    </div>
    <a-empty v-else style="margin-top: 20vh;" description="点选左侧数据" />
  </a-card>
</template>

<script>
export default {
  props: {
    cItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
